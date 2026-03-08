import { useRouter, usePathname } from "expo-router"
import { useEffect, useRef, useState, useCallback, useLayoutEffect } from "react"
import { View, Pressable } from "react-native"
import Logo from "@/components/common/Logo"
import { Text } from "@/components/common/Text"
import { meLastAccessedService } from "@/services"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { tw } from "@/utils/styles"
import { AlertCircle, RefreshCw } from "lucide-react-native"
import { HEADER_CONFIG } from "@/constants/header-config"
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "@/hooks/useAuth"

export default function LessonsScreen() {
    const router = useRouter()
    const pathname = usePathname()
    const { user, loading } = useAuth()
    const hasRedirectedRef = useRef(false)
    const [error, setError] = useState<string | null>(null)
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'មេរៀន',
            ...HEADER_CONFIG,
        })
    }, [navigation])

    const navigateToLastTopic = useCallback(async () => {
        try {
            setError(null)

            // If user is not logged in, skip last-accessed and go to default doc
            if (!user) {
                router.replace("/docs/1/1/1/1" as any)
                return
            }

            // Get last accessed topic
            const response = await meLastAccessedService.getLastAccessed()
            const lastAccessed = response.data.lastTopic

            // If no last topic, navigate to default
            if (!lastAccessed) {
                router.replace("/docs/1/1/1/1" as any)
                return
            }

            // Get curriculum from AsyncStorage
            const stored = await AsyncStorage.getItem('curriculum')
            if (!stored) {
                // If no curriculum, navigate to default
                router.replace("/docs/1/1/1/1" as any)
                return
            }

            const curriculumData = JSON.parse(stored)
            const topicId = lastAccessed.id

            // Search through all grades, subjects, lessons to find the topic
            let foundGrade: any = null
            let foundSubject: any = null
            let foundLesson: any = null
            let foundTopic: any = null

            for (const grade of curriculumData) {
                for (const subject of grade.subjects || []) {
                    for (const lesson of subject.lessons || []) {
                        const topic = lesson.topics?.find((t: any) => t.id === topicId)
                        if (topic) {
                            foundGrade = grade
                            foundSubject = subject
                            foundLesson = lesson
                            foundTopic = topic
                            break
                        }
                    }
                    if (foundTopic) break
                }
                if (foundTopic) break
            }

            if (foundGrade && foundSubject && foundLesson && foundTopic) {
                router.replace(`/docs/${foundGrade.id}/${foundSubject.id}/${foundLesson.id}/${foundTopic.id}` as any)
            } else {
                // Fallback to default if topic not found
                router.replace("/docs/1/1/1/1" as any)
            }
        } catch (err: any) {
            console.error('Error navigating to last topic:', err)
            setError(err.message || "មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។")
        }
    }, [router, user])

    useEffect(() => {
        // Wait for auth state to resolve before deciding what to do
        if (loading) {
            return
        }

        // Only redirect if we're exactly on /docs route
        // Reset the ref when we're not on /docs to allow redirect on next visit
        if (pathname !== "/docs") {
            hasRedirectedRef.current = false
            return
        }

        // Redirect if we haven't redirected yet in this mount
        if (pathname === "/docs" && !hasRedirectedRef.current) {
            hasRedirectedRef.current = true
            navigateToLastTopic()
        }
    }, [pathname, navigateToLastTopic, loading])

    const handleRetry = () => {
        hasRedirectedRef.current = false
        navigateToLastTopic()
    }

    if (error) {
        return (
            <View style={tw("flex-1 bg-white justify-center items-center px-6")}>
                <View style={tw("items-center gap-4")}>
                    <View style={tw("p-4 rounded-full bg-red-100")}>
                        <AlertCircle size={48} color="#dc2626" />
                    </View>
                    <View style={tw("items-center gap-2")}>
                        <Text style={tw("text-xl font-kh-bold text-gray-900 text-center")}>
                            មានបញ្ហាកើតឡើង
                        </Text>
                        <Text style={tw("text-base font-kh-normal text-gray-600 text-center")}>
                            {error}
                        </Text>
                    </View>
                    <Pressable
                        onPress={handleRetry}
                        style={tw("flex-row items-center gap-2 bg-indigo-600 px-6 py-3 rounded-full mt-4")}
                    >
                        <RefreshCw size={18} color="#ffffff" />
                        <Text style={tw("text-white font-kh-medium text-base")}>
                            ព្យាយាមម្តងទៀត
                        </Text>
                    </Pressable>
                </View>
            </View>
        )
    }

    return (
        <View style={tw("flex-1 bg-white justify-center items-center")}>
            <Logo isLoading isVertical size="xl" />
        </View>
    )
}

// TEST CODE - COMMENTED OUT
// import { useEffect, useState, useRef } from "react"
// import { View, Text, ScrollView } from "react-native"
// import { tw } from "@/utils/styles"
// import { feedCurriculumsService } from "@/services"
// import { deserializeTopicContentV3 } from "@/components/screens/docs/utils/ContentDeserializer"
// import ContentRenderer from "@/components/screens/docs/utils/ContentRenderer"
// import { TopicContent_V3 } from "@core-types/docs/topic"

// // Global flag to prevent multiple fetches across remounts
// let globalFetchDone = false

// export default function LessonsScreen() {
//     const [content, setContent] = useState<TopicContent_V3[]>([])
//     const [error, setError] = useState<string | null>(null)
//     const [isLoading, setIsLoading] = useState(true)
//     const hasFetchedRef = useRef(false)
//     const mountedRef = useRef(true)

//     useEffect(() => {
//         // Component mounted
//         mountedRef.current = true
        
//         // Only fetch once - check both ref and global flag
//         if (hasFetchedRef.current || globalFetchDone) {
//             console.log("Skipping fetch - already fetched (ref:", hasFetchedRef.current, "global:", globalFetchDone, ")")
//             return
//         }

//         hasFetchedRef.current = true
//         globalFetchDone = true

//         const fetchTopic = async () => {
//             try {
//                 console.log("=== Starting fetch for topic ID 1 ===")
//                 if (!mountedRef.current) {
//                     console.log("Component unmounted before fetch started")
//                     return
//                 }
                
//                 setIsLoading(true)
//                 setError(null)

//                 const topicData = await feedCurriculumsService.getTopicComponent("1")
                
//                 if (!mountedRef.current) {
//                     console.log("Component unmounted during fetch")
//                     return
//                 }
                
//                 console.log("=== Topic data received ===")
//                 console.log("Topic data.component type:", typeof topicData?.component)
//                 console.log("Topic data.component is array:", Array.isArray(topicData?.component))
                
//                 if (!topicData?.component) {
//                     throw new Error("No component data received")
//                 }

//                 // topicData.component is already an object/array, so we need to stringify it
//                 // before passing to deserializeTopicContentV3 which expects a JSON string
//                 const componentString = JSON.stringify(topicData.component)
//                 console.log("Component stringified, length:", componentString.length)
                
//                 // Deserialize the content
//                 const deserializedContent = deserializeTopicContentV3(componentString)
//                 console.log("Content deserialized, items:", deserializedContent.length)
                
//                 if (!mountedRef.current) {
//                     console.log("Component unmounted after deserialization")
//                     return
//                 }
                
//                 setContent(deserializedContent)
//                 setIsLoading(false)
//                 console.log("=== Fetch and render completed successfully ===")
//             } catch (err: any) {
//                 if (!mountedRef.current) {
//                     console.log("Component unmounted during error handling")
//                     return
//                 }
//                 console.error("=== Error fetching topic ===", err)
//                 setError(err.message || "Unknown error")
//                 setIsLoading(false)
//                 // Reset global flag on error so we can retry
//                 globalFetchDone = false
//             }
//         }

//         fetchTopic()

//         // Cleanup
//         return () => {
//             mountedRef.current = false
//             console.log("Component cleanup - unmounting")
//         }
//     }, [])

//     if (isLoading) {
//         return (
//             <View style={tw("flex-1 bg-white p-4 justify-center items-center")}>
//                 <Text style={tw("text-lg")}>Loading topic...</Text>
//             </View>
//         )
//     }

//     if (error) {
//         return (
//             <View style={tw("flex-1 bg-white p-4")}>
//                 <View style={tw("bg-red-100 p-4 rounded mb-4")}>
//                     <Text style={tw("text-red-800 font-bold")}>Error:</Text>
//                     <Text style={tw("text-red-600")}>{error}</Text>
//                 </View>
//             </View>
//         )
//     }

//     return (
//         <View style={tw("flex-1 bg-white")}>
//             <ScrollView style={tw("flex-1")} contentContainerStyle={tw("p-4")}>
//                 <Text style={tw("text-2xl font-bold mb-4")}>Topic ID: 1</Text>
//                 <ContentRenderer content={content} />
//             </ScrollView>
//         </View>
//     )
// }