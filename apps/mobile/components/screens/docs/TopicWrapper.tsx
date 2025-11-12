import { View, Pressable } from 'react-native'
import { Text } from '@/components/common/Text'
import { ArrowLeft, ArrowRight } from 'lucide-react-native'
import { tw } from '@/utils/styles'

interface NavigationItem {
    title: string
    link: string
}

interface TopicWrapperProps {
    title: string
    children: React.ReactNode
    prev?: NavigationItem | null
    next?: NavigationItem | null
    onNavigate?: (link: string) => void
}

export default function TopicWrapper({ title, children, prev, next, onNavigate }: TopicWrapperProps) {
    const handleNavigation = (link: string) => {
        if (onNavigate) {
            onNavigate(link)
        }
    }

    return (
        <View style={tw("flex-1 ")}>
            {/* Header */}
            <View style={tw("mb-4")}>
                <Text style={tw("text-2xl font-bold text-indigo-500")}>{title}</Text>
            </View>

            {/* Separator */}
            <View style={tw("w-full h-0.5 bg-gray-100 mb-4")} />

            {/* Content */}
            <View style={tw("flex-1")}>
                {children}
            </View>

            {/* Navigation Buttons */}
            <View style={tw("flex-row justify-between items-center mt-6")}>
                {prev ? (
                    <Pressable
                        onPress={() => handleNavigation(prev.link)}
                        style={tw("flex flex-row items-center bg-indigo-500 px-4 py-2 rounded-full")}
                    >
                        <ArrowLeft size={16} color="white" />
                        <Text style={tw("text-white ml-2")} numberOfLines={1}>{prev.title}</Text>
                    </Pressable>
                ) : (
                    <Pressable
                        disabled
                        style={tw("flex-row items-center bg-gray-200 px-4 py-2 rounded-full")}
                    >
                        <ArrowLeft size={16} color="#9CA3AF" />
                        <Text style={tw("text-gray-400 ml-2")}>មុន</Text>
                    </Pressable>
                )}

                {next ? (
                    <Pressable
                        onPress={() => handleNavigation(next.link)}
                        style={tw("flex-row items-center bg-indigo-500 px-4 py-2 rounded-full")}
                    >
                        <Text style={tw("text-white mr-2")} numberOfLines={1}>{next.title}</Text>
                        <ArrowRight size={16} color="white" />
                    </Pressable>
                ) : (
                    <Pressable
                        disabled
                        style={tw("flex-row items-center bg-gray-200 px-4 py-2 rounded-full")}
                    >
                        <Text style={tw("text-gray-400 mr-2")}>បន្ទាប់</Text>
                        <ArrowRight size={16} color="#9CA3AF" />
                    </Pressable>
                )}
            </View>
        </View>
    )
}