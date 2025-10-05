import { View, TouchableOpacity, Pressable } from 'react-native'
import { Text } from '@components/common/Text'
import { ArrowLeft, ArrowRight } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface NavigationItem {
    title: string
    link: string
}

interface TopicWrapperProps {
    title: string
    children: React.ReactNode
    prev?: NavigationItem | null
    next?: NavigationItem | null
}

// You might need to adjust these types based on your actual navigation structure
type RootStackParamList = {
    [key: string]: undefined | { grade?: string; topic?: string }
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>

export default function TopicWrapper({ title, children, prev, next }: TopicWrapperProps) {
    const navigation = useNavigation<NavigationProp>()

    const handleNavigation = (link: string) => {
        // Remove leading slash if present
        const cleanPath = link.replace(/^\//, '')
        // Split the path into segments
        const segments = cleanPath.split('/')

        if (segments.length >= 2) {
            // Navigate with parameters
            navigation.navigate(segments[0], {
                grade: segments[1],
                topic: segments[2]
            })
        } else {
            // Fallback to simple navigation
            navigation.navigate(cleanPath)
        }
    }

    return (
        <View className="flex-1 bg-gray-50 p-4">
            {/* Header */}
            <View className="mb-4">
                <Text className="text-2xl font-bold text-indigo-500">{title}</Text>
            </View>

            {/* Separator */}
            <View className="w-full h-0.5 bg-gray-100 mb-4" />

            {/* Content */}
            <View className="flex-1">
                {children}
            </View>

            {/* Navigation Buttons */}
            <View className="flex-row justify-between items-center mt-6">
                {prev ? (
                    <Pressable
                        onPress={() => handleNavigation(prev.link)}
                        className="flex flex-row items-center bg-indigo-500 px-4 py-2 rounded-full"
                    >
                        <ArrowLeft size={16} color="white" />
                        <Text className="text-white ml-2 line-clamp-1">{prev.title}</Text>
                    </Pressable>
                ) : (
                    <Pressable
                        disabled
                        className="flex-row items-center bg-gray-200 px-4 py-2 rounded-full"
                    >
                        <ArrowLeft size={16} color="#9CA3AF" />
                        <Text className="text-gray-400 ml-2">មុន</Text>
                    </Pressable>
                )}

                {next ? (
                    <Pressable
                        onPress={() => handleNavigation(next.link)}
                        className="flex-row items-center bg-black px-4 py-2 rounded-full"
                    >
                        <Text className="text-white mr-2 line-clamp-1">{next.title}</Text>
                        <ArrowRight size={16} color="black" />
                    </Pressable>
                ) : (
                    <Pressable
                        disabled
                        className="flex-row items-center bg-gray-200 px-4 py-2 rounded-full"
                    >
                        <Text className="text-gray-400 mr-2">បន្ទាប់</Text>
                        <ArrowRight size={16} color="#9CA3AF" />
                    </Pressable>
                )}
            </View>
        </View>
    )
}