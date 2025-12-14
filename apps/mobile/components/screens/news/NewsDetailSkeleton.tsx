import { View } from 'react-native';
import { tw } from '@/utils/styles';

export default function NewsDetailSkeleton() {
    return (
        <View style={tw('flex-1 bg-white pt-20')}>
            {/* Image Skeleton */}
            <View style={tw('px-4')}>
                <View style={tw('w-full h-64 bg-gray-200 rounded-3xl')} />
            </View>

            {/* Content Skeleton */}
            <View style={tw('px-4 pt-6 gap-4')}>
                {/* Author Info Skeleton */}
                <View style={tw('flex-row items-center gap-3')}>
                    <View style={tw('w-10 h-10 rounded-full bg-gray-200')} />
                    <View style={tw('flex-1 gap-2')}>
                        <View style={tw('h-4 w-32 bg-gray-200 rounded')} />
                        <View style={tw('h-3 w-24 bg-gray-100 rounded')} />
                    </View>
                </View>

                {/* Title Skeleton */}
                <View style={tw('gap-2')}>
                    <View style={tw('h-6 w-full bg-gray-200 rounded')} />
                    <View style={tw('h-6 w-4/5 bg-gray-200 rounded')} />
                </View>

                {/* Description Skeleton */}
                <View style={tw('gap-2')}>
                    <View style={tw('h-4 bg-gray-100 rounded')} />
                    <View style={tw('h-4 w-5/6 bg-gray-100 rounded')} />
                    <View style={tw('h-4 w-4/5 bg-gray-100 rounded')} />
                    <View style={tw('h-4 w-3/4 bg-gray-100 rounded')} />
                    <View style={tw('h-4 w-5/6 bg-gray-100 rounded')} />
                </View>
            </View>
        </View>
    );
}

