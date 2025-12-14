// import { useState, useCallback, useEffect, useRef, useLayoutEffect } from 'react';
// import { View, ScrollView, TextInput, Pressable, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
// import { Text } from '@/components/common/Text';
// import { useNavigation } from '@react-navigation/native';
// import { HEADER_CONFIG } from '@/constants/header-config';
// import { tw } from '@/utils/styles';
// import { meAiService } from '@/services/index';
// // import MarkdownRenderer from '@/components/helper/MarkDownRenderer';
// import { Dropdown } from '@/components/common/Dropdown';
// import { Send, Bot, Copy, Check, RefreshCw, Square } from 'lucide-react-native';
// import { Message, AIHistoryItem } from '@/types/content/ai';
// import * as Clipboard from 'expo-clipboard';
// import { useAuth } from '@/hooks/useAuth';
// import type { AIResponseType } from '@/types/content/ai';

// const languages = [
//     { key: 'khmer', value: 'ភាសាខ្មែរ' },
//     { key: 'english', value: 'English' },
//     { key: 'chinese', value: '中文' },
//     { key: 'japanese', value: '日本語' },
//     { key: 'korean', value: '한국어' },
//     { key: 'vietnamese', value: 'Tiếng Việt' },
//     { key: 'french', value: 'Français' },
//     { key: 'german', value: 'Deutsch' },
//     { key: 'spanish', value: 'Español' },
// ];

// const responseTypeOptions: { key: AIResponseType; value: string }[] = [
//     { key: 'komplex', value: 'KOMPLEX' },
//     { key: 'normal', value: 'ធម្មតា' },
// ];

// export default function AiModal() {
//     const navigation = useNavigation();
//     const { user, loading: isAuthLoading } = useAuth();
//     const [messages, setMessages] = useState<Message[]>([]);
//     const [inputMessage, setInputMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [selectedResponseType, setSelectedResponseType] = useState<AIResponseType>('komplex');
//     const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
//     const [error, setError] = useState<string | null>(null);
//     const [streamingMessage, setStreamingMessage] = useState<string>('');
//     const [isStreaming, setIsStreaming] = useState(false);
//     const [isRequestInProgress, setIsRequestInProgress] = useState(false);
//     const [isLoadingHistory, setIsLoadingHistory] = useState(false);
//     const [hasMoreHistory, setHasMoreHistory] = useState(true);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [isLoadingMore, setIsLoadingMore] = useState(false);
//     const [tabId, setTabId] = useState<number | null>(null);

//     const streamingRafRef = useRef<number | null>(null);
//     const scrollViewRef = useRef<ScrollView>(null);
//     const messagesEndRef = useRef<View>(null);

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             ...HEADER_CONFIG,
//             presentation: 'modal',
//             headerTitle: 'តារា AI',
//         });
//     }, [navigation]);

//     const convertHistoryToMessages = (historyItems: AIHistoryItem[]): Message[] => {
//         const messages: Message[] = [];
//         historyItems.forEach((item) => {
//             messages.push({
//                 id: `user-${item.id}`,
//                 content: item.prompt,
//                 sender: 'user',
//                 timestamp: new Date(item.createdAt),
//                 isFromHistory: true,
//             });
//             messages.push({
//                 id: `ai-${item.id}`,
//                 content: item.aiResult,
//                 sender: 'ai',
//                 timestamp: new Date(item.createdAt),
//                 isFromHistory: true,
//                 responseType: item.responseType ?? 'normal',
//             });
//         });
//         return messages;
//     };

//     const loadHistory = useCallback(async (page: number = 1, append: boolean = false) => {
//         if (!user) return;

//         try {
//             if (page === 1) {
//                 setIsLoadingHistory(true);
//             } else {
//                 setIsLoadingMore(true);
//             }

//             const svc: any = meAiService as any;
//             let response: any;

//             if (typeof svc.getAiHistory === "function") {
//                 response = await svc.getAiHistory(page, 20);
//             } else if (typeof svc.getAiGeneralHistoryBasedOnTab === "function") {
//                 let activeTab = tabId;
//                 if (!activeTab && typeof svc.getAllAiGeneralTabNames === "function") {
//                     const tabs = await svc.getAllAiGeneralTabNames();
//                     if (tabs?.length) {
//                         activeTab = tabs[0].id;
//                         setTabId(activeTab);
//                     }
//                 }
//                 if (activeTab) {
//                     response = await svc.getAiGeneralHistoryBasedOnTab(activeTab, page, 20);
//                 }
//             }

//             if (response?.data) {
//                 const historyMessages = convertHistoryToMessages(response.data);

//                 if (append) {
//                     setMessages(prev => [...historyMessages, ...prev]);
//                 } else {
//                     setMessages(historyMessages);
//                 }

//                 setHasMoreHistory(response.hasMore ?? false);
//                 setCurrentPage(page);
//             }
//         } catch (error) {
//             console.error('Error loading AI history:', error);
//             setError('មានបញ្ហាក្នុងការផ្ទុកប្រវត្តិសន្ទនា។ សូមព្យាយាមម្តងទៀត។');
//         } finally {
//             setIsLoadingHistory(false);
//             setIsLoadingMore(false);
//         }
//     }, [user, tabId]);

//     useEffect(() => {
//         if (!user) {
//             setTimeout(() => {
//                 // router.replace("/auth");
//             }, 500);
//         }
//     }, [user]);

//     // Load AI history on component mount
//     useEffect(() => {
//         if (!isAuthLoading && user) {
//             loadHistory();
//         }
//     }, [user, isAuthLoading, loadHistory]);

//     const loadMoreHistory = () => {
//         if (hasMoreHistory && !isLoadingMore) {
//             loadHistory(currentPage + 1, true);
//         }
//     };

//     const scrollToBottom = useCallback(() => {
//         setTimeout(() => {
//             scrollViewRef.current?.scrollToEnd({ animated: true });
//         }, 100);
//     }, []);

//     // Scroll to bottom when new messages arrive
//     useEffect(() => {
//         scrollToBottom();
//     }, [messages, scrollToBottom]);

//     // Cleanup animation frames on unmount
//     useEffect(() => {
//         return () => {
//             if (streamingRafRef.current !== null) {
//                 cancelAnimationFrame(streamingRafRef.current);
//             }
//         };
//     }, []);

//     const callAi = useCallback(async (prompt: string) => {
//         const svc: any = meAiService as any;
//         const payload = { responseType: selectedResponseType };

//         if (typeof svc.callAiAndWriteToHistory === "function") {
//             return svc.callAiAndWriteToHistory(prompt, payload);
//         }

//         if (typeof svc.callAiGeneralAndWriteToHistory === "function" && tabId) {
//             return svc.callAiGeneralAndWriteToHistory(prompt, tabId, payload);
//         }

//         if (typeof svc.callAiGeneralFirstTime === "function") {
//             const res = await svc.callAiGeneralFirstTime(prompt, payload);
//             if (res?.tabId) {
//                 setTabId(res.tabId);
//             }
//             return res;
//         }

//         if (typeof svc.callAiTopic === "function") {
//             return svc.callAiTopic(prompt, 0, selectedResponseType);
//         }

//         throw new Error("No AI endpoint available");
//     }, [ selectedResponseType, tabId]);

//     const handleSendMessage = async () => {
//         if (!inputMessage.trim() || isRequestInProgress) return;

//         const userMessage: Message = {
//             id: Date.now().toString(),
//             content: inputMessage,
//             sender: 'user',
//             timestamp: new Date(),
//         };

//         setMessages(prev => [...prev, userMessage]);
//         const currentInput = inputMessage;
//         setInputMessage('');
//         setIsLoading(true);
//         setIsRequestInProgress(true);
//         setError(null);

//         try {
//             const response = await callAi(currentInput);
//             setIsLoading(false);
//             setIsRequestInProgress(false);

//             const aiResult = response?.data?.aiResult ?? response?.data;
//             const responseType = response?.responseType ?? selectedResponseType;

//             streamText(aiResult, responseType);
//         } catch (error) {
//             console.error('Error calling AI:', error);
//             setIsLoading(false);
//             setIsRequestInProgress(false);
//             setError('មានបញ្ហាក្នុងការទាក់ទងតារា។ សូមព្យាយាមម្តងទៀត។');
//         }
//     };

//     const handleCopyMessage = useCallback(async (messageId: string, content: string) => {
//         try {
//             await Clipboard.setStringAsync(content);
//             setCopiedMessageId(messageId);
//             setTimeout(() => setCopiedMessageId(null), 2000);
//         } catch (error) {
//             console.error('Failed to copy text: ', error);
//         }
//     }, []);

//     const streamText = (text: string, responseType: AIResponseType = 'normal') => {
//         setIsStreaming(true);
//         setStreamingMessage('');
//         let index = 0;
//         const maxStep = 32;
//         const minStep = 3;

//         const tick = () => {
//             if (index < text.length) {
//                 const dynamicStep = Math.min(minStep + Math.floor(index / 50), maxStep);
//                 index = Math.min(index + dynamicStep, text.length);
//                 setStreamingMessage(text.slice(0, index));
//                 streamingRafRef.current = requestAnimationFrame(tick);
//             } else {
//                 if (streamingRafRef.current !== null) {
//                     cancelAnimationFrame(streamingRafRef.current);
//                     streamingRafRef.current = null;
//                 }
//                 setIsStreaming(false);
//                 const aiResponse: Message = {
//                     id: (Date.now() + 1).toString(),
//                     content: text,
//                     sender: 'ai',
//                     timestamp: new Date(),
//                     responseType,
//                 };
//                 setMessages(prev => [...prev, aiResponse]);
//                 setStreamingMessage('');
//             }
//         };

//         streamingRafRef.current = requestAnimationFrame(tick);
//     };

//     const handleTryAgain = async () => {
//         if (messages.length === 0) return;

//         setIsLoading(true);
//         setIsRequestInProgress(true);
//         setError(null);

//         try {
//             const lastUserMessage = messages.filter(m => m.sender === 'user').pop();
//             if (!lastUserMessage) return;

//             const response = await callAi(lastUserMessage.content);
//             setIsLoading(false);
//             setIsRequestInProgress(false);

//             const aiResult = response?.data?.aiResult ?? response?.data;
//             const responseType = response?.responseType ?? selectedResponseType;
//             streamText(aiResult, responseType);
//         } catch (error) {
//             console.error('Error calling AI:', error);
//             setIsLoading(false);
//             setIsRequestInProgress(false);
//             setError('មានបញ្ហាក្នុងការទាក់ទងតារា។ សូមព្យាយាមម្តងទៀត។');
//         }
//     };

//     const handleStopStreaming = () => {
//         if (isRequestInProgress) {
//             setIsRequestInProgress(false);
//             setIsLoading(false);
//             setError('បានបញ្ឈប់ការស្នើសុំ។');
//         } else if (isStreaming) {
//             if (streamingRafRef.current !== null) {
//                 cancelAnimationFrame(streamingRafRef.current);
//                 streamingRafRef.current = null;
//             }
//             setIsStreaming(false);

//             if (streamingMessage.trim()) {
//                 const aiResponse: Message = {
//                     id: (Date.now() + 1).toString(),
//                     content: streamingMessage,
//                     sender: 'ai',
//                     timestamp: new Date(),
//                 };
//                 setMessages(prev => [...prev, aiResponse]);
//             }
//             setStreamingMessage('');
//         }
//     };

//     if (isAuthLoading) {
//         return (
//             <View style={tw('flex-1 bg-gray-50 items-center justify-center')}>
//                 <ActivityIndicator size="large" color="#4f46e5" />
//             </View>
//         );
//     }

//     return (
//         <KeyboardAvoidingView
//             style={tw('flex-1 bg-gray-50')}
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//             keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
//         >
//             <ScrollView
//                 ref={scrollViewRef}
//                 style={tw('flex-1')}
//                 contentContainerStyle={tw('p-4 pb-24')}
//                 showsVerticalScrollIndicator={false}
//             >
//                 {isLoadingHistory ? (
//                     <View style={tw('flex-1 items-center justify-center py-20')}>
//                         <ActivityIndicator size="large" color="#4f46e5" />
//                         <Text style={tw('mt-4 text-gray-500')}>កំពុងផ្ទុកប្រវត្តិសន្ទនា...</Text>
//                     </View>
//                 ) : messages.length === 0 ? (
//                     <View style={tw('flex-1 items-center justify-center py-20')}>
//                         <View style={tw('w-20 h-20 bg-indigo-100 rounded-full items-center justify-center mb-6')}>
//                             <Bot size={40} color="#4f46e5" />
//                         </View>
//                         <Text style={tw('text-2xl font-bold text-gray-900 mb-4')}>ស្វាគមន៍</Text>
//                         <Text style={tw('text-gray-600 text-center px-4')}>
//                             ខ្ញុំឈ្មោះតារា ជា AI ជំនួយការរៀន។ តើអ្នកចង់សួរអ្វីអំពីអ្វីដែរ?
//                         </Text>
//                     </View>
//                 ) : (
//                     <>
//                         {hasMoreHistory && (
//                             <Pressable
//                                 onPress={loadMoreHistory}
//                                 disabled={isLoadingMore}
//                                 style={tw('bg-gray-100 rounded-lg px-4 py-2 mb-4 self-center')}
//                             >
//                                 {isLoadingMore ? (
//                                     <View style={tw('flex-row items-center gap-2')}>
//                                         <ActivityIndicator size="small" color="#4f46e5" />
//                                         <Text style={tw('text-sm text-gray-600')}>កំពុងទាញយកប្រវត្តិសន្ទនា...</Text>
//                                     </View>
//                                 ) : (
//                                     <Text style={tw('text-sm text-gray-600')}>ទាញយកប្រវត្តិសន្ទនាបន្ថែម</Text>
//                                 )}
//                             </Pressable>
//                         )}

//                         {messages.map((message) => (
//                             <View key={message.id} style={tw('mb-6')}>
//                                 {message.sender === 'user' ? (
//                                     <View style={tw('items-end')}>
//                                         <View style={tw('bg-indigo-600 rounded-2xl px-4 py-3 max-w-[80%]')}>
//                                             <Text style={tw('text-white text-sm')}>{message.content}</Text>
//                                         </View>
//                                     </View>
//                                 ) : (
//                                     <View style={tw('w-full')}>
//                                         <View style={tw('bg-white rounded-2xl p-4 border border-gray-200')}>
//                                             {/* <MarkdownRenderer content={message.content} /> */}
//                                             <Text>{message.content}</Text>
//                                             <Pressable
//                                                 onPress={() => handleCopyMessage(message.id, message.content)}
//                                                 style={tw('mt-2 flex-row items-center gap-2')}
//                                             >
//                                                 {copiedMessageId === message.id ? (
//                                                     <>
//                                                         <Check size={16} color="#10b981" />
//                                                         <Text style={tw('text-sm text-green-600')}>បានចម្លង</Text>
//                                                     </>
//                                                 ) : (
//                                                     <>
//                                                         <Copy size={16} color="#6b7280" />
//                                                         <Text style={tw('text-sm text-gray-500')}>ចម្លង</Text>
//                                                     </>
//                                                 )}
//                                             </Pressable>
//                                         </View>
//                                     </View>
//                                 )}
//                             </View>
//                         ))}

//                         {isLoading && (
//                             <View style={tw('w-full mb-6')}>
//                                 <View style={tw('flex-row items-center gap-2')}>
//                                     <View style={tw('flex-row gap-1')}>
//                                         <View style={tw('w-2 h-2 bg-gray-400 rounded-full')} />
//                                         <View style={tw('w-2 h-2 bg-gray-400 rounded-full')} />
//                                         <View style={tw('w-2 h-2 bg-gray-400 rounded-full')} />
//                                     </View>
//                                     <Text style={tw('text-sm text-gray-500')}>កំពុងគិត...</Text>
//                                 </View>
//                             </View>
//                         )}

//                         {isStreaming && (
//                             <View style={tw('w-full mb-6')}>
//                                 <View style={tw('bg-white rounded-2xl p-4 border border-gray-200')}>
//                                     {/* <MarkdownRenderer content={streamingMessage} /> */}
//                                     <Text>{streamingMessage}</Text>
//                                 </View>
//                             </View>
//                         )}

//                         {error && (
//                             <View style={tw('w-full mb-6')}>
//                                 <View style={tw('bg-red-50 border border-red-200 rounded-2xl p-4')}>
//                                     <View style={tw('flex-row items-center gap-2')}>
//                                         <View style={tw('w-2 h-2 bg-red-500 rounded-full')} />
//                                         <Text style={tw('text-sm text-red-700 flex-1')}>{error}</Text>
//                                         <Pressable onPress={handleTryAgain}>
//                                             <RefreshCw size={16} color="#ef4444" />
//                                         </Pressable>
//                                     </View>
//                                 </View>
//                             </View>
//                         )}

//                         <View ref={messagesEndRef} />
//                     </>
//                 )}
//             </ScrollView>

//             {/* Fixed Input Area */}
//             <View style={tw('bg-gray-50 border-t border-gray-200 p-4')}>
//                 <View style={tw('bg-white rounded-2xl border border-gray-200 p-2 flex-row items-end gap-2')}>

//                     <View style={tw('w-24')}>
//                         <Dropdown
//                             data={responseTypeOptions}
//                             setSelected={(val: string | string[]) => setSelectedResponseType(val as AIResponseType)}
//                             defaultOption={responseTypeOptions[0]}
//                             disabled={isLoading || isStreaming || isRequestInProgress}
//                             width="w-24"
//                         />
//                     </View>

//                     <TextInput
//                         value={inputMessage}
//                         onChangeText={setInputMessage}
//                         placeholder="សរសេរសំណួររបស់អ្នក..."
//                         placeholderTextColor="#9ca3af"
//                         style={tw('flex-1 px-3 py-2 text-sm min-h-[40px] max-h-[120px]')}
//                         multiline
//                         editable={!isLoading && !isStreaming && !isRequestInProgress}
//                         onSubmitEditing={handleSendMessage}
//                     />

//                     {!isLoading && !isStreaming ? (
//                         <Pressable
//                             onPress={handleSendMessage}
//                             disabled={!inputMessage.trim() || isRequestInProgress}
//                             style={tw('bg-indigo-600 rounded-full p-2 disabled:opacity-50')}
//                         >
//                             <Send size={20} color="white" />
//                         </Pressable>
//                     ) : (
//                         <Pressable
//                             onPress={handleStopStreaming}
//                             style={tw('bg-red-600 rounded-full p-2')}
//                         >
//                             <Square size={20} color="white" />
//                         </Pressable>
//                     )}
//                 </View>

//                 <Text style={tw('text-xs text-gray-500 text-center mt-2')}>
//                     <Text style={tw('font-bold')}>តារា</Text> អាចមានកំហុស។ សូមពិនិត្យព័ត៌មានសំខាន់។
//                 </Text>
//             </View>
//         </KeyboardAvoidingView>
//     );
// }