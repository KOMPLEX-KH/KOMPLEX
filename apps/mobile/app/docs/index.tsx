import DocHeader from "@/components/screens/docs/DocHeader"
import { tw } from "@/utils/styles"
import { useNavigation } from "expo-router"
import React, { useLayoutEffect, useState } from "react"
import { View } from "react-native"
// import { curriculum } from "@/lessons/curriculum"
import { HEADER_CONFIG } from "@/constants/header-config"
import ComingSoon from "@/components/screens/docs/ComingSoon"

// type Params = {
//     grade: string
//     subject: string
//     lesson: string
//     topic: string
// }

// const getTopicComponent = (params: Params) => {
//     const grade = curriculum.find(g => g.grade === params.grade)
//     const subject = grade?.content.find(s => s.subject === params.subject)
//     const lesson = subject?.lessons.find(l => l.lesson === params.lesson)
//     const topic = lesson?.topics.find(t => t.englishTitle === params.topic)

//     return { topic, lesson, subject, grade }
// }

// const getNavigationTopics = (params: Params) => {
//     const { topic, lesson, subject, grade } = getTopicComponent(params)

//     if (!topic || !lesson || !subject || !grade) return { prev: null, next: null }

//     const currentIndex = lesson.topics.findIndex(t => t.englishTitle === params.topic)

//     const prev = currentIndex > 0 ? {
//         title: lesson.topics[currentIndex - 1].title,
//         link: `/${params.grade}/${params.subject}/${params.lesson}/${lesson.topics[currentIndex - 1].englishTitle}`
//     } : null

//     const next = currentIndex < lesson.topics.length - 1 ? {
//         title: lesson.topics[currentIndex + 1].title,
//         link: `/${params.grade}/${params.subject}/${params.lesson}/${lesson.topics[currentIndex + 1].englishTitle}`
//     } : null

//     return { prev, next }
// }

export default function LessonsScreen() {
    const navigation = useNavigation()
    const [isHeaderVisible] = useState(true)
    // const [lastScrollY, setLastScrollY] = useState(0)
    // const scrollRef = useRef<ScrollView>(null)

    // Get route params
    // const params = useLocalSearchParams() as Params
    // const { topic } = getTopicComponent(params)
    // const navigationTopics = getNavigationTopics(params)

    // const handleScroll = (event: any) => {
    //     const currentScrollY = event.nativeEvent.contentOffset.y

    //     if (currentScrollY > lastScrollY && currentScrollY > 10) {
    //         setIsHeaderVisible(false)
    //     } else if (currentScrollY < lastScrollY) {
    //         setIsHeaderVisible(true)
    //     }

    //     setLastScrollY(currentScrollY)
    // }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'មេរៀន',
            ...HEADER_CONFIG,
        })
    }, [navigation])

    // if (!topic?.component) {
    //     // Handle 404 case
    //     return (
    //         <View style={tw("flex-1 items-center justify-center")}>
    //             {/* <Text>មិនមានមេរៀននេះទេ</Text> */}
    //         </View>
    //     )
    // }

    // const TopicComponent = React.lazy(() => topic.component())

    return (
        <View style={tw("flex-1 bg-white")}>
            <DocHeader isVisible={isHeaderVisible} />
            <ComingSoon />
            {/* <ScrollView
                onScroll={handleScroll}
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={tw("py-36")}
            >
                <ComplexDefinition/>
            </ScrollView> */}
        </View>
    )
}
