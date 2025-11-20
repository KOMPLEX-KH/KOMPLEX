'use client';

import { useMemo, useState } from 'react';
import { View, TextInput, Pressable, ScrollView } from 'react-native';
import { Tag, X } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

interface TagsProps {
    subjects: string[];
    onSubjectsChange: (subjects: string[]) => void;
}

const suggestedSubjects = [
    'គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា',
    'អក្សរសាស្ត្រខ្មែរ', 'ប្រវត្តិវិទ្យា', 'ភូមិវិទ្យា', 'ភាសាអង់គ្លេស',
    'អក្សរសិល្ប៍', 'វិទ្យាសាស្ត្រ', 'បច្ចេកវិទ្យា', 'សិល្បៈ',
];

const suggestedTags = [
    'លំហាត់សៀវភៅ', 'លំហាត់កម្សាន្ត', 'លំហាត់អូឡាំព្យាដ', 'លំហាត់សាកល្បង',
    'ជំនួយកិច្ចការផ្ទះ', 'ការត្រៀមប្រលង', 'ការរំលឹកមេរៀន', 'ការដោះស្រាយបញ្ហា',
    'ការរៀនអន្តរកម្ម', 'ការរៀនតាមរូបភាព', 'ជំហានម្តងមួយៗ', 'កម្រិតខ្ពស់',
];

export default function Tags({ subjects, onSubjectsChange }: TagsProps) {
    const [subjectInput, setSubjectInput] = useState('');
    const [tagInput, setTagInput] = useState('');

    const filteredSubjects = useMemo(
        () => suggestedSubjects.filter(
            (subject) =>
                subject.toLowerCase().includes(subjectInput.toLowerCase()) &&
                !subjects.includes(subject)
        ),
        [subjectInput, subjects]
    );

    const filteredTags = useMemo(
        () => suggestedTags.filter(
            (tag) =>
                tag.toLowerCase().includes(tagInput.toLowerCase()) &&
                !subjects.includes(tag)
        ),
        [tagInput, subjects]
    );

    const addSubject = (value: string) => {
        const trimmed = value.trim();
        if (!trimmed) return;
        if (!subjects.includes(trimmed)) {
            onSubjectsChange([...subjects, trimmed]);
        }
        setSubjectInput('');
        setTagInput('');
    };

    const removeSubject = (value: string) => {
        onSubjectsChange(subjects.filter((subject) => subject !== value));
    };

    return (
        <View style={tw('bg-white rounded-3xl border border-gray-200 p-4 gap-4')}>
            <View style={tw('flex-row items-center gap-2')}>
                <Tag size={18} color="#4F46E5" />
                <Text style={tw('text-lg font-kh-semibold text-gray-900')}>មុខវិជ្ជា និងស្លាក</Text>
            </View>

            <View style={tw('gap-2')}>
                <Text style={tw('text-sm font-kh-medium text-gray-700')}>មុខវិជ្ជា</Text>
                <TextInput
                    value={subjectInput}
                    onChangeText={setSubjectInput}
                    placeholder="វាយបញ្ចូលមុខវិជ្ជា..."
                    placeholderTextColor="#9CA3AF"
                    style={tw('border border-gray-300 rounded-3xl px-4 py-3 text-base text-gray-900')}
                    onSubmitEditing={() => addSubject(subjectInput)}
                    returnKeyType="done"
                />
                {filteredSubjects.length > 0 && subjectInput.length > 0 && (
                    <ScrollView style={tw('max-h-40 rounded-2xl border border-gray-200')}>
                        {filteredSubjects.map((subject) => (
                            <Pressable
                                key={subject}
                                onPress={() => addSubject(subject)}
                                style={tw('px-4 py-3 border-b border-gray-100 last:border-b-0')}
                            >
                                <Text style={tw('text-gray-700')}>{subject}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                )}
            </View>

            <View style={tw('gap-2')}>
                <Text style={tw('text-sm font-kh-medium text-gray-700')}>ស្លាកបន្ថែម</Text>
                <TextInput
                    value={tagInput}
                    onChangeText={setTagInput}
                    placeholder="វាយបញ្ចូលស្លាក..."
                    placeholderTextColor="#9CA3AF"
                    style={tw('border border-gray-300 rounded-3xl px-4 py-3 text-base text-gray-900')}
                    onSubmitEditing={() => addSubject(tagInput)}
                    returnKeyType="done"
                />
                {filteredTags.length > 0 && tagInput.length > 0 && (
                    <ScrollView style={tw('max-h-40 rounded-2xl border border-gray-200')}>
                        {filteredTags.map((tag) => (
                            <Pressable
                                key={tag}
                                onPress={() => addSubject(tag)}
                                style={tw('px-4 py-3 border-b border-gray-100 last:border-b-0')}
                            >
                                <Text style={tw('text-gray-700')}>{tag}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                )}
            </View>

            <View style={tw('flex-row flex-wrap gap-2')}>
                {subjects.map((subject) => (
                    <View
                        key={subject}
                        style={tw('flex-row items-center gap-2 px-3 py-2 bg-indigo-100 rounded-full')}
                    >
                        <Text style={tw('text-sm font-kh-medium text-indigo-700')}>
                            {subject}
                        </Text>
                        <Pressable onPress={() => removeSubject(subject)}>
                            <X size={14} color="#4F46E5" />
                        </Pressable>
                    </View>
                ))}
            </View>
        </View>
    );
}
