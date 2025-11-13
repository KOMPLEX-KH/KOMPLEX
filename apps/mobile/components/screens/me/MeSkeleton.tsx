import { View } from 'react-native';
import { tw } from '@/utils/styles';
import Sidebar from './Sidebar';

export default function MeSkeleton() {
    return (
        <View style={tw("flex-1 bg-gray-50")}>
            <Sidebar />
            <View style={tw("flex-1 pt-20")}>
                <View style={tw("p-4")}>
                    <View style={tw("gap-6")}>
                        <View style={tw("h-8 bg-gray-200 rounded-3xl w-1/3")} />
                        <View style={tw("flex-row flex-wrap gap-4")}>
                            {[...Array(4)].map((_, i) => (
                                <View key={i} style={tw("w-full sm:w-[48%] lg:w-[23%] h-24 bg-gray-200 rounded-3xl")} />
                            ))}
                        </View>
                        <View style={tw("h-64 bg-gray-200 rounded-3xl")} />
                    </View>
                </View>
            </View>
        </View>
    );
}
