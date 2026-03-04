import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Image, ActivityIndicator, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { feedNewsService } from '@/services';
import { HEADER_CONFIG } from '@/constants/header-config';
import { AlertCircle, RefreshCw } from 'lucide-react-native';
import Carousel from '@/components/common/Carousel';
import NewsDetailSkeleton from '@/components/screens/news/NewsDetailSkeleton';
import type { News } from '@core-types/content/news';

export default function NewsDetailScreen() {
    const navigation = useNavigation();
    const params = useLocalSearchParams();
    const newsId = params.id as string;

    const [news, setNews] = useState<News | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'ព័ត៌មាន',
            ...HEADER_CONFIG,
        });
    }, [navigation, news?.title]);

    useEffect(() => {
        const loadNews = async () => {
            if (!newsId) {
                setError('មិនមាន ID ព័ត៌មាន');
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);
                const newsData = await feedNewsService.getNewsById(newsId);
                setNews(newsData.data);
            } catch (err: any) {
                console.error('Error loading news:', err);
                setError(err.message || 'មានបញ្ហាកើតឡើងពេលទាញយកព័ត៌មាន។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        loadNews();
    }, [newsId]);

    const handleRetry = () => {
        setError(null);
        setIsLoading(true);
        const loadNews = async () => {
            try {
                const newsData = await feedNewsService.getNewsById(newsId);
                setNews(newsData.data);
            } catch (err: any) {
                console.error('Error loading news:', err);
                setError(err.message || 'មានបញ្ហាកើតឡើងពេលទាញយកព័ត៌មាន។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };
        loadNews();
    };

    if (isLoading) {
        return <NewsDetailSkeleton />;
    }

    if (error) {
        return (
            <View style={tw('flex-1 bg-white justify-center items-center px-6')}>
                <View style={tw('items-center gap-4')}>
                    <View style={tw('p-4 rounded-full bg-red-100')}>
                        <AlertCircle size={48} color="#dc2626" />
                    </View>
                    <View style={tw('items-center gap-2')}>
                        <Text style={tw('text-xl font-kh-bold text-gray-900 text-center')}>
                            មានបញ្ហាកើតឡើង
                        </Text>
                        <Text style={tw('text-base font-kh-normal text-gray-600 text-center')}>
                            {error}
                        </Text>
                    </View>
                    <Pressable
                        onPress={handleRetry}
                        style={tw('flex-row items-center gap-2 bg-indigo-600 px-6 py-3 rounded-full mt-4')}
                    >
                        <RefreshCw size={18} color="#ffffff" />
                        <Text style={tw('text-white font-kh-medium text-base')}>
                            ព្យាយាមម្តងទៀត
                        </Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    if (!news) {
        return (
            <View style={tw('flex-1 bg-white items-center justify-center px-6')}>
                <Text style={tw('text-lg font-kh-medium text-gray-600')}>
                    មិនរកឃើញព័ត៌មាន
                </Text>
            </View>
        );
    }

    return (
        <ScrollView
            style={tw('flex-1 bg-white')}
            contentContainerStyle={tw('pt-20 pb-6 ')}
            showsVerticalScrollIndicator={false}
        >
            {/* Media Carousel */}
            {news.media && news.media.length > 0 && (
                <View style={tw('mb-6 px-4')}>
                    <Carousel
                        media={news.media}
                        autoPlay={false}
                        showControls={true}
                    />
                </View>
            )}

            {/* Content */}
            <View style={tw('px-4')}>

                {/* Title */}
                <Text style={tw('text-2xl font-kh-bold text-gray-900 mb-4')}>
                    {news.title}
                </Text>

                {/* Description */}
                <Text style={tw('text-base font-kh-normal text-gray-700 leading-6')}>
                    {news.description}
                </Text>
            </View>
        </ScrollView>
    );
}

