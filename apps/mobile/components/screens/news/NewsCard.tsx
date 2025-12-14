import { View, Image, Pressable, StyleSheet } from 'react-native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { LinearGradient } from 'expo-linear-gradient';

interface NewsCardProps {
    id: string | number;
    image: string;
    title: string;
    description: string;
    onPress?: () => void;
}

export default function NewsCard({ image, title, description, onPress }: NewsCardProps) {
    return (
        <Pressable
            onPress={onPress}
            style={tw("rounded-3xl overflow-hidden mb-4")}
        >
            <View style={tw("relative")}>
                <Image
                    source={{ uri: image }}
                    style={tw("w-full h-64")}
                    resizeMode="cover"
                />
                {/* Gradient Overlay - black fading from transparent to opaque */}
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}
                    locations={[0, 0.6, 1]}
                    style={StyleSheet.absoluteFill}
                />
                {/* Text Content */}
                <View style={tw("absolute bottom-0 left-0 right-0 p-4")}>
                    <Text style={tw("text-white text-xl font-kh-bold mb-2")} numberOfLines={2}>
                        {title}
                    </Text>
                    <Text style={tw("text-white/90 text-sm font-kh-medium")} numberOfLines={2}>
                        {description}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}

