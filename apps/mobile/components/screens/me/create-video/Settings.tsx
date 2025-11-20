'use client';

import { View, Switch } from 'react-native';
import { ThumbsUp, MessageSquare, Settings as SettingsIcon } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

interface SettingsProps {
    showLikes: boolean;
    showComments: boolean;
    onShowLikesChange: (show: boolean) => void;
    onShowCommentsChange: (show: boolean) => void;
}

export default function Settings({
    showLikes,
    showComments,
    onShowLikesChange,
    onShowCommentsChange,
}: SettingsProps) {
    return (
        <View style={tw('bg-white rounded-3xl border border-gray-200 p-4 gap-4')}>
            <View style={tw('flex-row items-center gap-2')}>
                <SettingsIcon size={20} color="#4F46E5" />
                <Text style={tw('text-lg font-kh-semibold text-gray-900')}>ការកំណត់ការបង្ហាញ</Text>
            </View>

            <View style={tw('flex-row items-center justify-between gap-4')}>
                <View style={tw('flex-row items-center gap-3 flex-1')}>
                    <ThumbsUp size={18} color="#6B7280" />
                    <View style={tw('flex-1')}>
                        <Text style={tw('text-sm font-kh-medium text-gray-700')}>បង្ហាញចំណូលចិត្ត</Text>
                        <Text style={tw('text-xs text-gray-500')}>អនុញ្ញាតឱ្យអ្នកមើលគូសចំណូលចិត្ត</Text>
                    </View>
                </View>
                <Switch
                    value={showLikes}
                    onValueChange={onShowLikesChange}
                    trackColor={{ true: '#4F46E5', false: '#D1D5DB' }}
                    thumbColor={showLikes ? '#FFFFFF' : '#FFFFFF'}
                />
            </View>

            <View style={tw('flex-row items-center justify-between gap-4')}>
                <View style={tw('flex-row items-center gap-3 flex-1')}>
                    <MessageSquare size={18} color="#6B7280" />
                    <View style={tw('flex-1')}>
                        <Text style={tw('text-sm font-kh-medium text-gray-700')}>បង្ហាញមតិតិការ</Text>
                        <Text style={tw('text-xs text-gray-500')}>អនុញ្ញាតឱ្យអ្នកមើលធ្វើមតិតិការ</Text>
                    </View>
                </View>
                <Switch
                    value={showComments}
                    onValueChange={onShowCommentsChange}
                    trackColor={{ true: '#4F46E5', false: '#D1D5DB' }}
                    thumbColor={showComments ? '#FFFFFF' : '#FFFFFF'}
                />
            </View>
        </View>
    );
}
