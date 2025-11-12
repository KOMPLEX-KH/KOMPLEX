import { FlatList, Pressable, TextInput, View } from 'react-native';
import { tw } from '@/utils/styles';
import Logo from '@/components/common/Logo';
import { Text } from '@/components/common/Text';
import { ArrowRight, Bell, BookOpen, Bot, Camera, Edit, MessageSquare, Search } from 'lucide-react-native'
import FeatureCard from '@/components/screens/home/featureCard';
import PostCard from '@/components/screens/home/postCard';
import { TAILWIND_COLORS } from '@/constants/styles/tailwind-colors';

const MAIN_FEATURES = [
    {
        title: 'មេរៀន',
        icon: <BookOpen size={28} color={"white"} />,
        href: '/docs',
    },
    // {
    //     title: 'អនុវត្តន៍',
    //     icon: <Edit size={28} color={"white"} />,
    //     href: '/exercises',
    // },
    {
        title: 'តារា AI',
        icon: <Bot size={28} color={"white"} />,
        href: '/ai'
    },
    {
        title: 'ពិភាក្សា',
        icon: <MessageSquare size={28} color={"white"} />,
        href: '/forums',
    },
    // {
    //     title: 'អត្ថបទ',
    //     icon: <BookOpen size={28} color={"white"} />,
    //     href: '/blogs',
    // },
    {
        title: 'វីដេអូ',
        icon: <Camera size={28} color={"white"} />,
        href: '/videos'
    },

]

export default function HomeScreen() {
    return (
        <FlatList
            data={MAIN_FEATURES}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            style={tw("bg-white flex-1")}
            contentContainerStyle={tw("px-4 py-6 pb-20")}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                <>
                    <View style={tw("flex-row items-center justify-between mb-6")}>
                        <Logo />
                        <Pressable style={tw("rounded-full bg-indigo-600 p-2")}>
                            <Bell size={20} color="white" />
                        </Pressable>
                    </View>
                    {/* <View style={tw("flex-row items-center justify-between mb-6")}>
                        <Text style={tw("text-3xl font-extrabold italic")}>សួស្ដី រក្សា!</Text>
                        <Pressable style={tw("rounded-full bg-indigo-600 px-5 py-3 flex-row items-center gap-2")}>
                            <Text style={tw("text-white font-bold italic")}>បន្តមេរៀន</Text>
                            <ArrowRight size={18} color="white" />
                        </Pressable>
                    </View> */}
                </>
            }
            renderItem={({ item }) => (
                <View style={tw("flex-1 py-2 px-1")}>
                    <FeatureCard {...(item as any)} />
                </View>
            )}
            ListFooterComponent={
                <View style={tw("mt-8")}>
                    <View style={tw("flex-row items-center justify-between gap-2 mb-8")}>
                        <TextInput placeholder="ស្វែងរក" placeholderTextColor={TAILWIND_COLORS["gray-500"]} style={tw("border border-gray-300 rounded-full px-3 py-2 flex-1 font-kh-medium")} />
                        <Pressable style={tw("rounded-full bg-indigo-600 p-2")}>
                            <Search size={20} color="white" />
                        </Pressable>
                    </View>
                    <View style={tw("gap-4")}>
                        <PostCard
                            title="បច្ចេកវិទ្យា AI កំពុងផ្លាស់ប្តូរវិធីសាស្ត្រសិក្សា"
                            username="TechEdu"
                            createdAt="2 ថ្ងៃមុន"
                            description="យើងកំពុងសាកល្បងប្រើ AI ដើម្បីជួយសិស្សចងចាំ និងយល់បានកាន់តែងាយស្រួល។"
                            image="https://komplex.app/chemistry/pic27.png"
                            href="/"
                        />

                        <PostCard
                            title="កីឡា៖ ក្រុមជម្រើសជាតិឈ្នះជើងឯកអាស៊ាន"
                            username="SportNews"
                            createdAt="1 ម៉ោងមុន"
                            description="កម្ពុជាបានឈ្នះការប្រកួតបាល់ទាត់អាស៊ានជាមួយលទ្ធផល 3-1។"
                            image="https://pub-92b72a731f7641aba0ab9d1897016909.r2.dev/1-0cb1a888-8dad-48a9-9256-6b3a9a93bb5c-the-quadratic-formula-for-the-practice-problems-with-answers-1024x655.webp"
                            href="/"
                        />

                        <PostCard
                            title="សិល្បៈនិងវប្បធម៌៖ ពិព័រណ៍គំនូរថ្មីនៅភ្នំពេញ"
                            username="CultureKH"
                            createdAt="ម្សិលមិញ"
                            description="ពិព័រណ៍បង្ហាញស្នាដៃរបស់សិល្បករវ័យក្មេង ជាមួយនឹងការច្នៃប្រឌិតថ្មីៗ។"
                            image="https://pub-92b72a731f7641aba0ab9d1897016909.r2.dev/12-4f3cc4ef-ef59-4bfe-b0d4-bfa56dc79140-anoushka-puri-f1YfrZ1o2r8-unsplash.jpg"
                            href="/"
                        />

                        <PostCard
                            title="New React Native 0.74 Features You Should Know"
                            username="DevTalk"
                            createdAt="5 ថ្ងៃមុន"
                            description="From performance boosts to new styling APIs, here's what's exciting in the latest version."
                            image="https://pub-92b72a731f7641aba0ab9d1897016909.r2.dev/15-4001721e-900b-43aa-9cf8-ce73e84582df-IMG_6865.jpeg"
                            href="/"
                        />

                        <PostCard
                            title="សុខភាព៖ គន្លឹះក្នុងការថែរក្សាស្បែកនៅរដូវក្តៅ"
                            username="HealthTips"
                            createdAt="3 ម៉ោងមុន"
                            description="ការផឹកទឹកច្រើន និងការប្រើសាប៊ូសម្អាតស្បែកល្មម អាចជួយរក្សាសុខភាពស្បែកបាន។"
                            image="https://pub-92b72a731f7641aba0ab9d1897016909.r2.dev/2-3d250cdf-bf5d-4671-a34d-0dce1a36066d-GettyImages-713784033-5962f27b3df78cdc68bb2b6d.jpg"
                            href="/"
                        />
                    </View>

                    <Pressable
                        style={tw("rounded-full bg-indigo-600 px-6 py-4 flex-row items-center justify-center mt-6")}>
                        <Text style={tw("text-white font-bold italic mr-2")}>មើលបន្ថែម</Text>
                        <ArrowRight size={18} color="white" />
                    </Pressable>
                </View>
            }
        />
    );
}




