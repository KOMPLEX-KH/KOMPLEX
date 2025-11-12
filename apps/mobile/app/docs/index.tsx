import { useRouter, usePathname } from "expo-router"
import { useEffect, useRef } from "react"
import { View } from "react-native"
import { tw } from "@/utils/styles"

// Global flag to prevent multiple redirects
let hasRedirected = false

export default function LessonsScreen() {
    const router = useRouter()
    const pathname = usePathname()
    const hasRedirectedRef = useRef(false)

    useEffect(() => {
        // Only redirect if we're exactly on /docs route
        // Check both local ref and global flag to prevent loops
        if (pathname === "/docs" && !hasRedirectedRef.current && !hasRedirected) {
            hasRedirectedRef.current = true
            hasRedirected = true
            router.replace("/docs/1/1/1/1" as any)
            
        }
    }, [pathname, router])

    // Reset global flag if we navigate away from /docs
    useEffect(() => {
        if (pathname !== "/docs" && pathname.startsWith("/docs/")) {
            hasRedirected = false
        }
    }, [pathname])

    return (
        <View style={tw("flex-1 bg-white")} />
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
