import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Pressable, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { meAiService } from '@/services/index';
import SideBar from '@/components/screens/ai/SideBar';
import PromptTextarea from '@/components/screens/ai/PromptTextarea';
import ResponseTypeDropdown, { ResponseTypeOption } from '@/components/screens/ai/ResponseTypeDropdown';
import { Bot, Send } from 'lucide-react-native';
import { router } from 'expo-router';
import { AIResponseType } from '@/types/content/ai';
import { useAuth } from '@/hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { HEADER_CONFIG } from '@/constants/header-config';

const responseTypeOptions: readonly ResponseTypeOption[] = [
    { id: 'komplex', name: 'KOMPLEX', description: 'បង្ហាញជាប្រអប់ KOMPLEX' },
    { id: 'normal', name: 'ធម្មតា', description: 'បង្ហាញជាទម្រង់ Markdown' },
] as const;

const NEW_TAB_PROMPT_KEY_PREFIX = 'ai:newTabFirstPrompt:';
const NEW_TAB_RESPONSE_TYPE_KEY_PREFIX = 'ai:newTabFirstPromptResponseType:';

export default function AIWelcomePage() {
    const navigation = useNavigation();
    const { user, loading: isAuthLoading } = useAuth();
    const [inputMessage, setInputMessage] = useState('');
    const [selectedResponseType, setSelectedResponseType] = useState<ResponseTypeOption>(
        responseTypeOptions[0]
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const textareaRef = useRef<any>(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'តារា AI',
            ...HEADER_CONFIG,
        })
    }, [navigation])


    useEffect(() => {
        if (!isAuthLoading && !user) {
            router.replace('/auth');
        }
    }, [user, isAuthLoading]);

    const handleSendFirstMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        setIsLoading(true);
        setError(null);

        try {
            const response = await meAiService.callAiGeneralFirstTime(inputMessage, {
                responseType: selectedResponseType.id as AIResponseType,
            });

            // Backend now returns the new tab metadata without calling AI:
            // response.data: { id, name, prompt, responseType, ... }
            const base = (response as {
                data?: { id?: number; name?: string; prompt?: string; responseType?: string };
            }) || {};
            const payload = (base.data ?? base) as {
                id?: number;
                name?: string;
                prompt?: string;
                responseType?: string;
            };

            const tabId: number | undefined = payload.id;
            const prompt: string | undefined = payload.prompt ?? inputMessage;
            const respType: string | undefined = payload.responseType ?? selectedResponseType.id;

            if (!tabId) {
                throw new Error('Missing tabId in response');
            }

            // Persist the first prompt & response type so the /ai/chat page
            // can perform the actual first AI call and make the transition seamless.
            try {
                await AsyncStorage.setItem(
                    `${NEW_TAB_PROMPT_KEY_PREFIX}${tabId}`,
                    String(prompt ?? '')
                );
                await AsyncStorage.setItem(
                    `${NEW_TAB_RESPONSE_TYPE_KEY_PREFIX}${tabId}`,
                    String(respType ?? '')
                );
            } catch (storageErr) {
                console.error('Failed to persist first prompt for new tab:', storageErr);
            }

            // Seamlessly navigate to the new chat page using replace (ChatGPT-style)
            router.replace(`/ai/chat?tabId=${tabId}`);
        } catch (e) {
            console.error('Error starting first AI chat:', e);
            setError('មានបញ្ហាក្នុងការចាប់ផ្តើមសន្ទនាថ្មី។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsLoading(false);
        }
    };

    if (isAuthLoading) {
        return (
            <View style={tw('flex-1 bg-gray-50 items-center justify-center')}>
                <ActivityIndicator size="large" color="#4f46e5" />
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            style={tw('flex-1 bg-gray-50')}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <SideBar />

            <ScrollView
                style={tw('flex-1')}
                contentContainerStyle={tw('flex-1 justify-center px-4 py-16')}
                showsVerticalScrollIndicator={false}
            >
                <View style={tw('max-w-4xl mx-auto w-full gap-2')}>
                    {/* Centered welcome card */}
                    <View style={tw('items-center justify-center mb-8')}>
                        <View style={tw('bg-indigo-100 rounded-full items-center justify-center mb-6 p-4')}>
                            <Bot size={40} color="#4F46E5" />
                        </View>
                        <Text style={tw('text-gray-600 mb-4 font-bold text-lg text-center font-kh-bold')}>
                            <Text style={tw('text-indigo-600')}>តារា AI</Text> សូមស្វាគមន៍!
                        </Text>
                        <Text style={tw('text-gray-600 mb-4 text-center font-kh-medium')}>
                            តើអ្នកចង់សួរអ្វីអំពី អ្វីដែរ?
                        </Text>
                        {error && (
                            <Text style={tw('mt-2 text-sm text-red-600 text-center font-kh-medium')}>
                                {error}
                            </Text>
                        )}
                    </View>

                    {/* Input area */}
                    <View style={tw('bg-white flex shadow-lg border border-gray-200 rounded-3xl p-4 gap-2')}>
                        <PromptTextarea
                            ref={textareaRef}
                            value={inputMessage}
                            onChangeText={setInputMessage}
                            editable={!isLoading}
                            placeholder={
                                isLoading
                                    ? 'កំពុងដំណើរការ...'
                                    : 'សរសេរសំណួររបស់អ្នកដំបូងនៅទីនេះ...'
                            }
                        />

                        <View style={tw('flex-row items-center justify-between')}>
                            <ResponseTypeDropdown
                                options={responseTypeOptions}
                                value={selectedResponseType}
                                onChange={setSelectedResponseType}
                                disabled={isLoading}
                                variant="default"
                            />

                            <Pressable
                                onPress={handleSendFirstMessage}
                                disabled={!inputMessage.trim() || isLoading}
                                style={tw(
                                    'px-2 py-2 bg-indigo-600 rounded-full disabled:opacity-50'
                                )}
                            >
                                <Send size={16} color="#FFFFFF" />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
