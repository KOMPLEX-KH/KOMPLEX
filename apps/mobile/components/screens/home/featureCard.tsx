// import { tw } from "@/utils/styles";
// import { Pressable, View } from "react-native";
// import { Text } from '@/components/common/Text'
// import { Href, useRouter } from "expo-router";

// interface FeatureCardProps {
//     title: string;
//     icon: React.ReactNode;
//     href?: Href;
//     isComingSoon?: boolean;
//     isImportant?: boolean;
//     onPress?: () => void;
// }

// export default function FeatureCard({
//     title,
//     icon,
//     href,
//     isImportant = false,
//     isComingSoon = false,
//     onPress,
// }: FeatureCardProps) {
//     const router = useRouter();

//     return (
//         <Pressable
//             style={tw("rounded-3xl bg-indigo-50 border border-indigo-600 shadow-md px-5 py-5 flex-1 flex items-center justify-center gap-2")}
//             onPress={() => onPress ? onPress() : href ? router.push(href) : null}
//         >
//             <View style={tw(isImportant ? "p-5 rounded-full bg-indigo-600 text-white" : "p-3 rounded-full bg-indigo-600 text-white")}>
//                 {icon}
//             </View>
//             <Text style={tw(isImportant ? "text-xl font-kh-bold" : "text-lg font-kh-bold")}>{title}</Text>
//         </Pressable>
//     );
// }

import { tw } from "@/utils/styles";
import { Pressable, View } from "react-native";
import { Text } from '@/components/common/Text'
import { Href, useRouter } from "expo-router";

interface FeatureCardProps {
    title: string;
    icon: React.ReactNode;
    href?: Href;
    isComingSoon?: boolean;
    isImportant?: boolean;
    onPress?: () => void;
}

export default function FeatureCard({
    title,
    icon,
    href,
    isImportant = false,
    isComingSoon = false,
    onPress,
}: FeatureCardProps) {
    const router = useRouter();

    return (
        <Pressable
            style={tw("flex-1 rounded-3xl bg-indigo-50 border border-indigo-600 shadow-md py-4 px-2 items-center justify-center gap-2")}
            onPress={() => onPress ? onPress() : href ? router.push(href) : null}
        >
            {/* <View style={tw("w-12 h-12 rounded-full bg-indigo-100 items-center justify-center mb-2")}>  */}
            <View style={tw("p-3 rounded-full bg-indigo-50 border border-indigo-600")}>
                {icon}
            </View>
            <Text style={tw("text-sm font-kh-bold text-black text-center")}>{title}</Text>
        </Pressable>
    );
}