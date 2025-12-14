import React, { useEffect, useState, useRef } from 'react';
import { View, Pressable, Modal, ScrollView, TextInput, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { meAiService } from '@/services/index';
import { Edit, Menu, X, MoreVertical, Check, Trash2 } from 'lucide-react-native';
import { AiTab } from '@core-types/content/ai';
import TabSkeleton from './TabSkeleton';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { BlurView } from 'expo-blur';

type ActiveTab = 'general' | 'topic';

const SideBar: React.FC = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [activeTab, setActiveTab] = useState<ActiveTab>('general');
    const [generalTabs, setGeneralTabs] = useState<AiTab[]>([]);
    const [topicTabs, setTopicTabs] = useState<AiTab[]>([]);
    const [isLoadingGeneral, setIsLoadingGeneral] = useState(false);
    const [isLoadingTopics, setIsLoadingTopics] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentChatTitle, setCurrentChatTitle] = useState<string>('');

    // Editing state
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editValue, setEditValue] = useState<string>('');
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const editInputRef = useRef<TextInput>(null);

    useEffect(() => {
        const fetchTabs = async () => {
            try {
                setIsLoadingGeneral(true);
                setIsLoadingTopics(true);

                const [general, topics] = await Promise.all([
                    meAiService.getAllAiGeneralTabNames(),
                    meAiService.getAllAiTopicTabNames(),
                ]);

                const generalItems = Array.isArray(general) ? general : [];
                const topicItems = Array.isArray(topics) ? topics : [];

                setGeneralTabs(generalItems);
                setTopicTabs(topicItems);
            } catch (error) {
                console.error('Failed to load AI tabs:', error);
            } finally {
                setIsLoadingGeneral(false);
                setIsLoadingTopics(false);
            }
        };

        fetchTabs();
    }, []);

    // Sync activeTab with params
    useEffect(() => {
        const topicId = params.topicId;
        const tabId = params.tabId;
        if (topicId) {
            setActiveTab('topic');
        } else if (tabId) {
            setActiveTab('general');
        }
    }, [params]);

    // Focus input when editing
    useEffect(() => {
        if (editingId !== null && editInputRef.current) {
            setTimeout(() => {
                editInputRef.current?.focus();
            }, 100);
        }
    }, [editingId]);

    // Update current chat title when params or tabs change
    useEffect(() => {
        const tabId = params.tabId as string | undefined;
        const topicId = params.topicId as string | undefined;

        if (tabId) {
            const tab = generalTabs.find(tab => String(tab.id) === tabId);
            setCurrentChatTitle(tab?.name || '');
        } else if (topicId) {
            const tab = topicTabs.find(tab => String(tab.id) === topicId);
            setCurrentChatTitle(tab?.name || '');
        } else {
            // Clear title when no tab/topic is selected
            setCurrentChatTitle('');
        }
    }, [params.tabId, params.topicId, generalTabs, topicTabs]);

    const items = activeTab === 'general' ? generalTabs : topicTabs;
    const isLoading = activeTab === 'general' ? isLoadingGeneral : isLoadingTopics;
    const activeTabId = params.tabId as string | undefined;
    const activeTopicId = params.topicId as string | undefined;

    const handleEditStart = (item: AiTab) => {
        setEditingId(item.id);
        setEditValue(item.name);
        setOpenMenuId(null);
        setIsMobileMenuOpen(false);
    };

    const handleEditSave = async (item: AiTab) => {
        if (!editValue.trim() || editValue === item.name) {
            setEditingId(null);
            setEditValue('');
            return;
        }

        try {
            if (activeTab === 'general') {
                await meAiService.updateAiGeneralTabName(item.id, editValue.trim());
                setGeneralTabs(prev => prev.map(tab =>
                    tab.id === item.id ? { ...tab, name: editValue.trim() } : tab
                ));
            }
            setEditingId(null);
            setEditValue('');
        } catch (error) {
            console.error('Failed to update tab name:', error);
            Alert.alert('មានបញ្ហា', 'មិនអាចកែប្រែបានទេ');
        }
    };

    const handleEditCancel = () => {
        setEditingId(null);
        setEditValue('');
    };

    const handleDelete = async (item: AiTab) => {
        Alert.alert(
            'លុបសន្ទនា',
            `តើអ្នកពិតជាចង់លុប "${item.name}" ចោលមែនទេ?`,
            [
                { text: 'បោះបង់', style: 'cancel' },
                {
                    text: 'លុប',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            if (activeTab === 'general') {
                                await meAiService.deleteAiGeneralTab(item.id);
                                setGeneralTabs(prev => prev.filter(tab => tab.id !== item.id));
                                if (String(item.id) === activeTabId) {
                                    router.push('/ai');
                                }
                            } else {
                                await meAiService.deleteAiTopicTab(item.id);
                                setTopicTabs(prev => prev.filter(tab => tab.id !== item.id));
                                if (String(item.id) === activeTopicId) {
                                    router.push('/ai');
                                }
                            }
                            setOpenMenuId(null);
                            setIsMobileMenuOpen(false);
                        } catch (error) {
                            console.error('Failed to delete tab:', error);
                            Alert.alert('មានបញ្ហា', 'មិនអាចលុបបានទេ');
                        }
                    }
                }
            ]
        );
    };

    const TabItem = ({ item }: { item: AiTab }) => {
        const isActiveItem =
            activeTab === 'general'
                ? String(item.id) === activeTabId
                : String(item.id) === activeTopicId;

        return (
            <View
                style={tw(
                    `flex-row items-center justify-between w-full px-4 py-3 rounded-full border mb-2 ${isActiveItem
                        ? 'bg-indigo-50 border-indigo-500'
                        : 'bg-transparent border-transparent'
                    }`
                )}
            >
                <Pressable
                    onPress={() => {
                        router.push(
                            activeTab === 'general'
                                ? `/ai/chat?tabId=${item.id}`
                                : `/ai/chat?topicId=${item.id}`
                        );
                        setIsMobileMenuOpen(false);
                    }}
                    style={tw("flex-1")}
                >
                    <Text
                        style={tw(
                            `text-sm font-medium ${isActiveItem ? 'text-indigo-900' : 'text-indigo-900'
                            }`
                        )}
                        numberOfLines={1}
                    >
                        {item.name}
                    </Text>
                </Pressable>
                <View style={tw("relative")}>
                    <Pressable
                        onPress={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                        style={tw("p-1")}
                    >
                        <MoreVertical size={16} color="#6B7280" />
                    </Pressable>
                    {openMenuId === item.id && (
                        <View
                            style={tw("absolute right-0 top-8 w-32 bg-white rounded-2xl p-1 border border-gray-200 shadow-lg z-50")}
                        >
                            {activeTab === 'general' && (
                                <Pressable
                                    onPress={() => handleEditStart(item)}
                                    style={tw("flex-row items-center gap-2 px-3 py-2 rounded-xl")}
                                >
                                    <Edit size={16} color="#4B5563" />
                                    <Text style={tw("text-sm text-gray-700")}>កែប្រែ</Text>
                                </Pressable>
                            )}
                            <Pressable
                                onPress={() => handleDelete(item)}
                                style={tw("flex-row items-center gap-2 px-3 py-2 rounded-xl")}
                            >
                                <Trash2 size={16} color="#EF4444" />
                                <Text style={tw("text-sm text-red-600")}>លុប</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        < >
            {/* Mobile menu button */}
            <View style={tw("absolute w-full bg-white top-14 left-0 right-0 z-30 flex-row items-center justify-between px-4 py-2")}>
                <View >
                    <Pressable
                        onPress={() => setIsMobileMenuOpen(true)}
                        style={tw("w-10 h-10 items-center justify-center bg-white rounded-full")}
                    >
                        <Menu size={20} color="#4F46E5" />
                    </Pressable>
                </View>
                <Text
                    style={tw("text-sm font-bold text-indigo-600 text-center font-kh-bold")}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {currentChatTitle
                        ? currentChatTitle.trim().split(" ").length > 5
                            ? currentChatTitle.trim().split(" ").slice(0, 5).join(" ") + "..."
                            : currentChatTitle
                        : "ស្វាគមន៍"}
                </Text>
                <View >
                    <Pressable
                        onPress={() => router.push('/ai')}
                        style={tw("w-10 h-10 items-center justify-center bg-indigo-600 rounded-full")}
                    >
                        <Edit size={20} color="#FFFFFF" />
                    </Pressable>
                </View>

            </View >
            {/* Mobile overlay menu */}
            <Modal
                visible={isMobileMenuOpen}
                transparent
                animationType="slide"
                onRequestClose={() => setIsMobileMenuOpen(false)}
                style={tw("flex-1 bg-black/30")}
            >
                <BlurView intensity={5} tint="light" style={tw("flex-1 rounded-3xl")}>
                    <View
                        style={tw("absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[80%] border border-indigo-50 shadow-lg shadow-indigo-500")}
                    >
                        {/* Header */}
                        <View style={tw("flex-row items-center justify-between px-4 py-3 border-b border-indigo-50")}>
                            <View style={tw("flex-row items-center gap-1")}>
                                <View style={tw("flex-row items-center")}>
                                    <Text style={tw("text-xl font-bold text-indigo-600")}>តា</Text>
                                    <Text style={tw("text-xl font-bold text-indigo-500")}> រា</Text>
                                </View>
                                <Text style={tw("text-base text-gray-500")}> AI 1.0</Text>
                            </View>
                            <Pressable
                                onPress={() => setIsMobileMenuOpen(false)}
                                style={tw("w-8 h-8 items-center justify-center rounded-full border border-gray-200")}
                            >
                                <X size={16} color="#6B7280" />
                            </Pressable>
                        </View>

                        {/* New chat button */}
                        <View style={tw("px-4 pt-3 pb-2")}>
                            <Pressable
                                onPress={() => {
                                    router.push('/ai');
                                    setIsMobileMenuOpen(false);
                                }}
                                style={tw("w-full flex-row items-center justify-center gap-2 rounded-full bg-indigo-600 py-3")}
                            >
                                <Edit size={16} color="#FFFFFF" />
                                <Text style={tw("text-sm font-medium text-white")}>សន្ទនាថ្មី</Text>
                            </Pressable>
                        </View>

                        {/* Tabs switcher */}
                        <View style={tw("px-3 pt-2 pb-2")}>
                            <View style={tw("flex-row p-1 rounded-full bg-indigo-50")}>
                                <Pressable
                                    onPress={() => setActiveTab('general')}
                                    style={tw(
                                        `flex-1 px-3 py-2 rounded-full ${activeTab === 'general'
                                            ? 'bg-white shadow-sm'
                                            : 'bg-transparent'
                                        }`
                                    )}
                                >
                                    <Text
                                        style={tw(
                                            `text-sm font-semibold text-center ${activeTab === 'general'
                                                ? 'text-indigo-700'
                                                : 'text-indigo-500'
                                            }`
                                        )}
                                    >
                                        ទូទៅ
                                    </Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => setActiveTab('topic')}
                                    style={tw(
                                        `flex-1 px-3 py-2 rounded-full ${activeTab === 'topic'
                                            ? 'bg-white shadow-sm'
                                            : 'bg-transparent'
                                        }`
                                    )}
                                >
                                    <Text
                                        style={tw(
                                            `text-sm font-semibold text-center ${activeTab === 'topic'
                                                ? 'text-indigo-700'
                                                : 'text-indigo-500'
                                            }`
                                        )}
                                    >
                                        មេរៀន
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                        {/* List */}
                        <ScrollView style={tw("flex-1 px-4 pb-3")} showsVerticalScrollIndicator={false}>
                            {isLoading ? (
                                <TabSkeleton />
                            ) : (
                                items.map((item) => (
                                    <TabItem key={`${activeTab}-${item.id}`} item={item} />
                                ))
                            )}
                        </ScrollView>
                    </View>
                </BlurView>
            </Modal>

            {/* Edit modal */}
            {
                editingId !== null && (
                    <Modal
                        visible={editingId !== null}
                        transparent
                        animationType="fade"
                        onRequestClose={handleEditCancel}
                    >
                        <View style={tw("flex-1 bg-black/30 items-center justify-center px-4")}>
                            <View style={tw("bg-white rounded-2xl shadow-xl border border-gray-200 w-full max-w-sm p-4 gap-3")}>
                                <Text style={tw("text-sm font-semibold text-gray-800")}>
                                    កែប្រែឈ្មោះសន្ទនា
                                </Text>
                                <TextInput
                                    ref={editInputRef}
                                    value={editValue}
                                    onChangeText={setEditValue}
                                    style={tw("w-full border border-gray-200 rounded-xl px-3 py-2 text-sm")}
                                    placeholder="ឈ្មោះថ្មី"
                                    onSubmitEditing={() => {
                                        const item = items.find((t) => t.id === editingId);
                                        if (item) {
                                            handleEditSave(item);
                                        }
                                    }}
                                />
                                <View style={tw("flex-row justify-end gap-2")}>
                                    <Pressable
                                        onPress={handleEditCancel}
                                        style={tw("w-9 h-9 items-center justify-center rounded-full border border-gray-200")}
                                    >
                                        <X size={16} color="#6B7280" />
                                    </Pressable>
                                    <Pressable
                                        onPress={() => {
                                            const item = items.find((t) => t.id === editingId);
                                            if (item) {
                                                handleEditSave(item);
                                            }
                                        }}
                                        style={tw("w-9 h-9 items-center justify-center rounded-full bg-indigo-600")}
                                    >
                                        <Check size={16} color="#FFFFFF" />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                )
            }
        </>
    );
};

export default SideBar;
