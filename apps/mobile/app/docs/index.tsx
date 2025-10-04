import { Text } from "@/components/common/Text";
import Header from "@/components/common/Header";
import DocHeader from "@/components/screens/docs/DocHeader";
import { tw } from "@/utils/styles";
import { useNavigation } from "expo-router";
import { useLayoutEffect, useState, useRef } from "react";
import { ScrollView, View } from "react-native";
import { BookOpen } from "lucide-react-native";
import { TAILWIND_COLORS } from "@/constants/styles/tailwind-colors";
import DefinitionBox from "@/components/screens/docs/boxes/DefinitionBox";
import TipBox from "@/components/screens/docs/boxes/TipBox";
import WarningBox from "@/components/screens/docs/boxes/WarningBox";
import HintBox from "@/components/screens/docs/boxes/HintBox";

export default function LessonsScreen() {
    const navigation = useNavigation();
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const scrollRef = useRef<ScrollView>(null);

    const handleScroll = (event: any) => {
        const currentScrollY = event.nativeEvent.contentOffset.y;

        if (currentScrollY > lastScrollY && currentScrollY > 20) {
            // Scrolling down and past initial 100px
            setIsHeaderVisible(false);
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up
            setIsHeaderVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'មេរៀន',
            headerBackButtonDisplayMode: "minimal",
            headerShown: true,
            contentStyle: { backgroundColor: "transparent", borderRadius: 0 },
            presentation: "card",
            header: ({ navigation, back, options }) => <Header title={options.headerTitle as string} icon={<BookOpen size={16} color={TAILWIND_COLORS["indigo-600"]} />} />
        });
    }, [navigation]);

    return (
        <View style={tw("flex-1 bg-white px-4")} >
            <DocHeader isVisible={isHeaderVisible}></DocHeader>
            <ScrollView onScroll={handleScroll} ref={scrollRef} showsVerticalScrollIndicator={false} contentContainerStyle={tw("py-36")}>
                <DefinitionBox title="ចង្គីសុំ" content="ចង្គីសុំ"></DefinitionBox>
                <TipBox title="ចង្គីសុំ" content="ចង្គីសុំ"></TipBox>
                <WarningBox  content="ចង្គីសុំ"></WarningBox>
                <WarningBox  content="ចង្គីសុំ"></WarningBox>
                <WarningBox  content="ចង្គីសុំ"></WarningBox>
                <WarningBox  content="ចង្គីសុំ"></WarningBox>
                <WarningBox  content="ចង្គីសុំ"></WarningBox>
                <HintBox  content="ចង្គីសុំ"></HintBox>
            </ScrollView>
        </View>
    )
}