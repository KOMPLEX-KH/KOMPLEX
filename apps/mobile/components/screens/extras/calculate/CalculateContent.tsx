import { useState, useEffect, useRef } from 'react';
import { View, TextInput, ScrollView, Pressable, FlatList } from 'react-native';
import { Calculator, Award } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import {
  ScienceSubjects,
  SocialScienceSubjects,
  getSubjectScienceGrade,
  getSubjectSocialScienceGrade,
  calculateTotalGrade,
  type Subject,
  type SubjectKey,
  type Scores,
} from './calculationMobile';

export default function CalculateContent() {
  const [tempScores, setTempScores] = useState<Scores>({});
  const [scores, setScores] = useState<Scores>({});
  const [result, setResult] = useState<{ average: number; grade: string } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [subjectType, setSubjectType] = useState<'science' | 'social'>('science');
  const resultRef = useRef<View>(null);

  const activeSubjects: Subject[] =
    subjectType === 'science' ? ScienceSubjects : SocialScienceSubjects;

  const canCalculate = activeSubjects.every((s) => tempScores[s.key]?.trim());


  const handleScoreChange = (key: SubjectKey, value: string) => {
    const max = activeSubjects.find((s) => s.key === key)!.maxScore;
    const numValue = Number(value);
    if (value === '' || (numValue >= 0 && numValue <= max)) {
      setTempScores((prev) => ({ ...prev, [key]: value }));
    }
  };

  const onCalculateClick = () => {
    if (!canCalculate) return;
    setIsCalculating(true);
    setTimeout(() => {
      setScores(tempScores);
      let requiredSum = 0;
      let englishBonus = 0;
      activeSubjects.forEach((sub) => {
        const value = Number(tempScores[sub.key]) || 0;
        if (sub.key === 'english') {
          if (value > 25) englishBonus = value - 25;
        } else {
          requiredSum += value;
        }
      });
      const totalPoint = englishBonus + requiredSum;
      const grade = calculateTotalGrade(totalPoint);
      setResult(requiredSum === 0 ? null : { average: Math.round(totalPoint), grade });
      setIsCalculating(false);
    }, 800);
  };

  const getSubjectGrade = (key: SubjectKey, score: number) =>
    subjectType === 'science'
      ? getSubjectScienceGrade(key, score)
      : getSubjectSocialScienceGrade(key, score);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tw('bg-indigo-600 rounded-t-3xl py-8 px-4')}>
        <View style={tw('flex-row items-center gap-3 mb-4')}>
          <Calculator size={32} color="#fff" />
          <Text style={tw('text-white text-2xl font-bold')}>គណនាពិន្ទុបាក់ឌុប</Text>
        </View>
        <View style={tw('bg-gray-200 rounded-3xl p-1 flex-row')}>
          <Pressable
            onPress={() => setSubjectType('science')}
            style={tw(
              `flex-1 py-2 rounded-3xl ${subjectType === 'science' ? 'bg-indigo-600' : ''}`
            )}
          >
            <Text
              style={tw(
                `text-center text-sm font-medium ${subjectType === 'science' ? 'text-white' : 'text-gray-600'}`
              )}
            >
              វិទ្យាសាស្រ្តពិត
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setSubjectType('social')}
            style={tw(
              `flex-1 py-2 rounded-3xl ${subjectType === 'social' ? 'bg-indigo-600' : ''}`
            )}
          >
            <Text
              style={tw(
                `text-center text-sm font-medium ${subjectType === 'social' ? 'text-white' : 'text-gray-600'}`
              )}
            >
              វិទ្យាសាស្រ្តសង្គម
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={tw('flex-row flex-wrap gap-3 my-6')}>
        <FlatList
          data={activeSubjects}
          keyExtractor={(subject) => subject.key}
          numColumns={2}
          renderItem={({ item: subject, index }) => {
            const Icon = subject.icon;
            const isLastOdd =
              activeSubjects.length % 2 === 1 && index === activeSubjects.length - 1;
            return (
              <View
                style={[
                  tw('bg-white rounded-3xl border border-gray-300 p-4 flex-1'),
                  isLastOdd ? { maxWidth: '47%' } : {},
                  { marginBottom: 12, marginRight: index % 2 === 0 ? 12 : 0 }
                ]}
                key={subject.key}
              >
                <View style={tw('flex-row items-center gap-3 mb-3')}>
                  <View style={tw('w-4 h-4 rounded-full bg-indigo-100 items-center justify-center')}>
                    <Icon size={24} color="#4f46e5" />
                  </View>
                  <Text style={tw('text-base font-semibold text-gray-800')}>{subject.name}</Text>
                </View>
                <TextInput
                  value={tempScores[subject.key] ?? ''}
                  onChangeText={(v) => handleScoreChange(subject.key as SubjectKey, v)}
                  placeholder={`0 - ${subject.maxScore}`}
                  keyboardType="number-pad"
                  style={tw('bg-gray-50 border-2 border-gray-200 rounded-full px-4 py-3 text-gray-800')}
                  placeholderTextColor="#9ca3af"
                />
              </View>
            );
          }}
          columnWrapperStyle={tw('flex-row flex-wrap items-center justify-center ')}
          scrollEnabled={false}
        />
      </View>

      <View style={tw('items-center mb-8')}>
        <Pressable
          onPress={onCalculateClick}
          disabled={!canCalculate || isCalculating}
          style={tw(
            `px-12 py-4 rounded-full ${canCalculate && !isCalculating ? 'bg-indigo-600' : 'bg-blue-300'
            }`
          )}
        >
          <Text style={tw('text-white text-lg font-bold')}>
            {isCalculating ? 'កំពុងគណនា...' : 'គណនាពិន្ទុ'}
          </Text>
        </Pressable>
      </View>

      {result && (
        <View ref={resultRef} style={tw('shadow-lg rounded-2xl p-4 mb-8')}>
          <View style={tw('items-center my-4')}>
            <Text
              style={tw(
                `text-2xl font-bold ${result.grade === 'F' ? 'text-red-500' : 'text-green-600'}`
              )}
            >
              {result.grade === 'F' ? 'សូមចូលរួមសោកស្តាយ' : 'សូមអបអរសាទរ !!'}
            </Text>
          </View>
          <View style={tw('flex-row justify-center items-center gap-4 py-4')}>
            <View style={tw('items-center')}>
              <Text style={tw('text-gray-500 text-base')}>លទ្ធផល</Text>
              <Text style={tw('text-indigo-500 text-2xl font-bold')}>
                {result.grade === 'F' ? 'ធ្លាក់' : 'ជាប់'}
              </Text>
            </View>
            <View style={tw('bg-indigo-600 rounded-2xl px-6 py-4')}>
              <Text style={tw('text-white text-base')}>ពិន្ទុសរុប</Text>
              <Text style={tw('text-white text-2xl font-bold')}>{result.average}</Text>
            </View>
            <View style={tw('items-center')}>
              <Text style={tw('text-gray-500 text-base')}>និទ្ទេស</Text>
              <Text style={tw('text-indigo-500 text-2xl font-bold')}>{result.grade}</Text>
            </View>
          </View>
          <View style={tw('flex-row flex-wrap gap-3')}>
            {activeSubjects.map((subj) => {
              const score = Number(scores[subj.key]) || 0;
              const grade = getSubjectGrade(subj.key as SubjectKey, score);
              return (
                <View
                  key={subj.key}
                  style={tw('bg-white rounded-2xl shadow p-4 flex-1 min-w-[45%]')}
                >
                  <View style={tw('flex-row items-center gap-2')}>
                    <View style={tw('bg-indigo-100 p-2 rounded-full')}>
                      <Award size={20} color="#4f46e5" />
                    </View>
                    <Text style={tw('font-semibold text-gray-600')}>{subj.name}</Text>
                  </View>
                  <View style={tw('items-end mt-2')}>
                    <Text style={tw('text-2xl font-semibold text-red-500')}>{grade}</Text>
                  </View>
                  <View style={tw('absolute left-0 bottom-0 bg-indigo-600 px-2 py-1 rounded-bl-2xl rounded-tr-xl')}>
                    <Text style={tw('text-lg font-bold text-white')}>{score}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </ScrollView>
  );
}
