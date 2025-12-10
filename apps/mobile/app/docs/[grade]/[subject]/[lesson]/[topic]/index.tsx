import DocHeader from "@/components/screens/docs/DocHeader"
import TopicWrapper from "@/components/screens/docs/TopicWrapper"
import Skeleton from "@/components/screens/docs/Skeleton"
import ComingSoon from "@/components/screens/docs/ComingSoon"
import { tw } from "@/utils/styles"
import { useNavigation, useLocalSearchParams, useRouter } from "expo-router"
import React, { useLayoutEffect, useState, useEffect, useRef, useMemo } from "react"
import { View, ScrollView } from "react-native"
import { HEADER_CONFIG } from "@/constants/header-config"
import { feedCurriculumsService } from "@/services"
import { deserializeTopicContentV3 } from "@/components/screens/docs/utils/ContentDeserializer"
import ContentRenderer from "@/components/screens/docs/utils/ContentRenderer"
import { Grade } from "@core-types/docs/curriculum"
import AsyncStorage from "@react-native-async-storage/async-storage"

type Params = {
    grade: string
    subject: string
    lesson: string
    topic: string
}

// Get navigation data from curriculum
const getNavigation = (curriculum: Grade[], params: Params) => {
    const grade = curriculum.find(g => g.id === parseInt(params.grade))
    const subject = grade?.subjects.find(s => s.id === parseInt(params.subject))
    const lesson = subject?.lessons.find(l => l.id === parseInt(params.lesson))
    const topic = lesson?.topics.find(t => t.id === parseInt(params.topic))

    if (!topic || !lesson || !subject || !grade) return { prev: null, next: null }

    const currentIndex = lesson.topics.findIndex(t => t.id === topic.id)

    const prev = currentIndex > 0 ? {
        title: lesson.topics[currentIndex - 1].name,
        link: `/docs/${grade.id}/${subject.id}/${lesson.id}/${lesson.topics[currentIndex - 1].id}`
    } : null

    const next = currentIndex < lesson.topics.length - 1 ? {
        title: lesson.topics[currentIndex + 1].name,
        link: `/docs/${grade.id}/${subject.id}/${lesson.id}/${lesson.topics[currentIndex + 1].id}`
    } : null

    return { prev, next }
}

export default function TopicScreen() {
    const navigation = useNavigation()
    const router = useRouter()
    const params = useLocalSearchParams() as Params
    const [isHeaderVisible] = useState(true)

    // Topic data state
    const [topicComponent, setTopicComponent] = useState<string | null>(null)
    const [navigationData, setNavigationData] = useState<{ prev: { title: string; link: string } | null; next: { title: string; link: string } | null } | null>(null)
    const [isLoadingTopic, setIsLoadingTopic] = useState(true)
    const [isExercise, setIsExercise] = useState(false)
    const [error, setError] = useState(false)

    // Curriculum state - initialized from AsyncStorage
    const [curriculum, setCurriculum] = useState<Grade[]>([])
    const [curriculumLoaded, setCurriculumLoaded] = useState(false)

    // Refs to prevent multiple simultaneous API calls and infinite loops
    const fetchingTopicRef = useRef(false)
    const fetchingCurriculumRef = useRef(false)
    const abortControllerRef = useRef<AbortController | null>(null)
    const lastFetchedTopicRef = useRef<string | null>(null)
    const hasTriedFetchRef = useRef(false)
    const mountedRef = useRef(true)

    // Memoize params to prevent unnecessary re-renders
    const memoizedParams = useMemo(() => ({
        grade: params.grade,
        subject: params.subject,
        lesson: params.lesson,
        topic: params.topic
    }), [params.grade, params.subject, params.lesson, params.topic])

    // Load curriculum from AsyncStorage or fetch from API
    useEffect(() => {
        const loadCurriculum = async () => {
            // Prevent multiple simultaneous calls
            if (fetchingCurriculumRef.current || curriculumLoaded) return
            fetchingCurriculumRef.current = true

            try {
                // Try to load from AsyncStorage first
                const stored = await AsyncStorage.getItem("curriculum")
                if (stored) {
                    try {
                        const parsed = JSON.parse(stored)
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            setCurriculum(parsed)
                            setCurriculumLoaded(true)
                            fetchingCurriculumRef.current = false
                            return
                        }
                    } catch (parseError) {
                        console.error('Error parsing stored curriculum:', parseError)
                        // Continue to fetch from API
                    }
                }

                // Fetch from API if not in storage or if storage is invalid
                try {
                    const curriculumData = await feedCurriculumsService.getCurriculum()
                    if (Array.isArray(curriculumData) && curriculumData.length > 0) {
                        setCurriculum(curriculumData)
                        setCurriculumLoaded(true)
                        await AsyncStorage.setItem("curriculum", JSON.stringify(curriculumData))
                    }
                } catch (fetchError) {
                    console.error('Error fetching curriculum:', fetchError)
                    // Set empty curriculum to prevent infinite loading
                    setCurriculumLoaded(true)
                }
            } catch (error) {
                console.error('Error loading curriculum:', error)
                setCurriculumLoaded(true)
            } finally {
                fetchingCurriculumRef.current = false
            }
        }
        loadCurriculum()
    }, [curriculumLoaded])

    // Create a stable key for the current topic to track if we've already tried fetching it
    const topicKey = useMemo(() =>
        `${memoizedParams.grade}-${memoizedParams.subject}-${memoizedParams.lesson}-${memoizedParams.topic}`,
        [memoizedParams.grade, memoizedParams.subject, memoizedParams.lesson, memoizedParams.topic]
    )

    // Reset state when topic changes
    useEffect(() => {
        // If topic changed, reset the fetch state
        if (lastFetchedTopicRef.current !== null && lastFetchedTopicRef.current !== topicKey) {
            setError(false)
            setTopicComponent(null)
            setIsExercise(false)
            setIsLoadingTopic(true)
            hasTriedFetchRef.current = false
        }
    }, [topicKey])

    // Fetch topic component - only runs when topicKey or curriculumLoaded changes
    useEffect(() => {
        // Component mounted
        mountedRef.current = true

        // Don't fetch if curriculum is not loaded yet
        if (!curriculumLoaded || curriculum.length === 0) {
            setIsLoadingTopic(false)
            return
        }

        // Don't fetch if we've already tried fetching this exact topic (prevents loops on errors)
        if (lastFetchedTopicRef.current === topicKey && hasTriedFetchRef.current) {
            return
        }

        // Prevent multiple simultaneous calls
        if (fetchingTopicRef.current) {
            return
        }

        // Cancel previous request if any
        if (abortControllerRef.current) {
            abortControllerRef.current.abort()
        }

        // Create new abort controller for this request
        const abortController = new AbortController()
        abortControllerRef.current = abortController

        // Mark that we're attempting to fetch this topic
        lastFetchedTopicRef.current = topicKey
        hasTriedFetchRef.current = true
        fetchingTopicRef.current = true

        const fetchTopicComponent = async () => {
            try {
                if (!mountedRef.current) {
                    return
                }

                setIsLoadingTopic(true)
                setError(false)
                setIsExercise(false)
                setTopicComponent(null)

                // Get topic info from curriculum
                const grade = curriculum.find(g => g.id === parseInt(memoizedParams.grade))
                const subject = grade?.subjects.find(s => s.id === parseInt(memoizedParams.subject))
                const lesson = subject?.lessons.find(l => l.id === parseInt(memoizedParams.lesson))
                const topic = lesson?.topics.find(t => t.id === parseInt(memoizedParams.topic))

                // If topic not found in curriculum, show error and stop
                if (!topic || !lesson || !subject || !grade) {
                    if (!mountedRef.current) return
                    setError(true)
                    setIsLoadingTopic(false)
                    fetchingTopicRef.current = false
                    return
                }

                // Check if topic is an exercise
                if (topic.exerciseId) {
                    if (!mountedRef.current) return
                    setIsExercise(true)
                    setIsLoadingTopic(false)
                    fetchingTopicRef.current = false
                    return
                }

                // Fetch topic component
                const topicData = await feedCurriculumsService.getTopicComponent(memoizedParams.topic)

                // Check if request was aborted (component unmounted or params changed)
                if (abortController.signal.aborted || !mountedRef.current) {
                    return
                }

                if (topicData && topicData.component) {
                    // Stringify the component data (it's already an object/array)
                    setTopicComponent(JSON.stringify(topicData.component))
                    setError(false)
                } else {
                    setTopicComponent(null)
                    setError(true)
                }
            } catch (fetchError: any) {
                // Check if request was aborted or component unmounted
                if (abortController.signal.aborted || !mountedRef.current) {
                    return
                }

                console.error('Error fetching topic component:', fetchError)
                // Set error state but don't throw - this prevents infinite loops
                setError(true)
                setTopicComponent(null)
            } finally {
                // Only update loading state if request wasn't aborted and component is still mounted
                if (!abortController.signal.aborted && mountedRef.current) {
                    setIsLoadingTopic(false)
                }
                fetchingTopicRef.current = false
            }
        }

        fetchTopicComponent()

        // Cleanup function to abort request if component unmounts or dependencies change
        return () => {
            mountedRef.current = false
            abortController.abort()
            fetchingTopicRef.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [topicKey, curriculumLoaded])

    // Get topic info from curriculum - memoized to prevent unnecessary recalculations
    const topicInfo = useMemo(() => {
        if (curriculum.length === 0) {
            return { grade: undefined, subject: undefined, lesson: undefined, topic: undefined }
        }
        const grade = curriculum.find(g => g.id === parseInt(memoizedParams.grade))
        const subject = grade?.subjects.find(s => s.id === parseInt(memoizedParams.subject))
        const lesson = subject?.lessons.find(l => l.id === parseInt(memoizedParams.lesson))
        const topic = lesson?.topics.find(t => t.id === parseInt(memoizedParams.topic))

        return { grade, subject, lesson, topic }
    }, [curriculum, memoizedParams.grade, memoizedParams.subject, memoizedParams.lesson, memoizedParams.topic])

    // Update navigation when curriculum or params change
    useEffect(() => {
        if (curriculum.length > 0 && topicInfo.grade && topicInfo.subject && topicInfo.lesson && topicInfo.topic) {
            const nav = getNavigation(curriculum, memoizedParams)
            setNavigationData(nav)
        } else {
            setNavigationData({ prev: null, next: null })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [topicInfo.grade?.id, topicInfo.subject?.id, topicInfo.lesson?.id, topicInfo.topic?.id, memoizedParams.grade, memoizedParams.subject, memoizedParams.lesson, memoizedParams.topic, curriculum.length])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'មេរៀន',
            ...HEADER_CONFIG,
        })
    }, [navigation])

    // Handle navigation - use replace to avoid navigation stack buildup
    const navigatingRef = useRef(false)
    const handleNavigation = (link: string) => {
        if (navigatingRef.current) return
        navigatingRef.current = true
        router.replace(link as any)
        // Reset navigation flag after a short delay
        setTimeout(() => {
            navigatingRef.current = false
        }, 100)
    }

    // Show loading while curriculum is loading or topic is loading
    if (!curriculumLoaded || (isLoadingTopic && curriculum.length > 0)) {
        return (
            <View style={tw("flex-1 bg-white")}>
                <DocHeader
                    isVisible={isHeaderVisible}
                    currentGrade={memoizedParams.grade}
                    currentSubject={memoizedParams.subject}
                    currentLesson={memoizedParams.lesson}
                    currentTopic={memoizedParams.topic}
                />
                <ScrollView contentContainerStyle={tw("py-36 px-4")}>
                    <TopicWrapper
                        title={topicInfo.topic?.name || ""}
                        prev={navigationData?.prev || null}
                        next={navigationData?.next || null}
                        onNavigate={handleNavigation}
                    >
                        <Skeleton />
                    </TopicWrapper>
                </ScrollView>
            </View>
        )
    }

    // Show exercise placeholder (TODO: implement exercise component)
    if (isExercise) {
        return (
            <View style={tw("flex-1 bg-white")}>
                <DocHeader
                    isVisible={isHeaderVisible}
                    currentGrade={memoizedParams.grade}
                    currentSubject={memoizedParams.subject}
                    currentLesson={memoizedParams.lesson}
                    currentTopic={memoizedParams.topic}
                />
                <ScrollView contentContainerStyle={tw("py-36 px-4")}>
                    <TopicWrapper
                        title={topicInfo.topic?.name || ""}
                        prev={navigationData?.prev || null}
                        next={navigationData?.next || null}
                        onNavigate={handleNavigation}
                    >
                        <ComingSoon />
                    </TopicWrapper>
                </ScrollView>
            </View>
        )
    }

    // Show error state or not found - combine these since they show the same UI
    if (error || !topicComponent) {
        return (
            <View style={tw("flex-1 bg-white")}>
                <DocHeader
                    isVisible={isHeaderVisible}
                    currentGrade={memoizedParams.grade}
                    currentSubject={memoizedParams.subject}
                    currentLesson={memoizedParams.lesson}
                    currentTopic={memoizedParams.topic}
                />
                <ScrollView contentContainerStyle={tw("py-36 px-4")}>
                    <TopicWrapper
                        title={topicInfo.topic?.name || ""}
                        prev={navigationData?.prev || null}
                        next={navigationData?.next || null}
                        onNavigate={handleNavigation}
                    >
                        <ComingSoon />
                    </TopicWrapper>
                </ScrollView>
            </View>
        )
    }

    // Render topic content
    const deserialized = deserializeTopicContentV3(topicComponent)

    return (
        <View style={tw("flex-1 bg-white")}>
            <DocHeader
                isVisible={isHeaderVisible}
                currentGrade={memoizedParams.grade}
                currentSubject={memoizedParams.subject}
                currentLesson={memoizedParams.lesson}
                currentTopic={memoizedParams.topic}
            />
            <ScrollView contentContainerStyle={tw("py-40 px-4")}>
                <TopicWrapper
                    title={topicInfo.topic?.name || ""}
                    prev={navigationData?.prev || null}
                    next={navigationData?.next || null}
                    onNavigate={handleNavigation}
                >
                    <ContentRenderer key={topicKey} content={deserialized} />
                </TopicWrapper>
            </ScrollView>
        </View>
    )
}
