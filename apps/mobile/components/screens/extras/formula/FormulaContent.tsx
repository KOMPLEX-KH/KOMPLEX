import { useState, useEffect, useMemo } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Pressable,
  Modal,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { Search, X } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { feedCurriculumsService } from '@/services/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Grade } from '@core-types/api-types/curriculum';
import {
  Formula,
  mockFormulas,
  subjectMapping,
} from '@/components/screens/extras/formula/formulaData';

const getStoredCurriculum = (): Grade[] => {
  return [];
};

export default function FormulaContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [curriculum, setCurriculum] = useState<Grade[]>(getStoredCurriculum);
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('curriculum');
        if (stored) {
          if (mounted) setCurriculum(JSON.parse(stored));
        } else {
          const res = await feedCurriculumsService.getCurriculum();
          if (mounted) {
            setCurriculum(res.data);
            await AsyncStorage.setItem('curriculum', JSON.stringify(res.data));
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const subjects = useMemo(() => {
    const grade12 = curriculum.find((g) => g.name.includes('១២'));
    const grade = grade12 ?? curriculum[0];
    return grade?.subjects.map((s) => ({ id: String(s.id), name: s.name })) ?? [];
  }, [curriculum]);

  useEffect(() => {
    if (subjects.length > 0 && !selectedSubjectId) {
      setSelectedSubjectId(subjects[0].id);
    }
  }, [subjects.length, selectedSubjectId]);

  const categories = useMemo(() => {
    if (!selectedSubjectId) return [{ id: 'all', name: 'គ្រប់មេរៀន' }];
    const grade = curriculum.find((g) => g.subjects.some((s) => String(s.id) === selectedSubjectId));
    const subject = grade?.subjects.find((s) => String(s.id) === selectedSubjectId);
    if (!subject?.lessons?.length) return [{ id: 'all', name: 'គ្រប់មេរៀន' }];
    return [
      { id: 'all', name: 'គ្រប់មេរៀន' },
      ...subject.lessons.map((l) => ({ id: String(l.id), name: l.name })),
    ];
  }, [curriculum, selectedSubjectId]);

  const filteredFormulas = useMemo(() => {
    const subjectName = subjects.find((s) => s.id === selectedSubjectId)?.name;
    const subjectKey = subjectName ? subjectMapping[subjectName] : null;
    return mockFormulas.filter((formula) => {
      const matchesSearch =
        !searchQuery ||
        formula.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSubject = !subjectKey || formula.subject === subjectKey;
      const matchesCategory =
        selectedCategory === 'all' || String(formula.category) === selectedCategory;
      return matchesSearch && matchesSubject && matchesCategory;
    });
  }, [searchQuery, selectedSubjectId, selectedCategory, subjects]);

  if (loading) {
    return (
      <View style={tw('flex-1 items-center justify-center py-12')}>
        <ActivityIndicator size="large" color="#4f46e5" />
      </View>
    );
  }

  return (
    <View style={tw('')}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw('mb-3')}>
        <View style={tw('flex-row gap-2')}>
          {subjects.map((s) => {
            const isActive = selectedSubjectId === s.id;
            return (
              <Pressable
                key={s.id}
                onPress={() => { setSelectedSubjectId(s.id); setSelectedCategory('all'); }}
                style={tw(
                  `px-4 py-2 rounded-full ${isActive ? 'bg-indigo-600' : 'bg-white border border-gray-200'}`
                )}
              >
                <Text style={tw(`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-700'}`)}>
                  {s.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View style={tw('flex-row gap-2 mb-4')}>
        <View style={tw('flex-1 flex-row items-center border border-gray-300 rounded-full bg-white pl-4')}>
          <Search size={20} color="#9ca3af" />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="ស្វែងរករូបមន្ត..."
            style={tw('flex-1 px-3 py-3')}
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      {filteredFormulas.length === 0 ? (
        <View style={tw('items-center py-12')}>
          <Text style={tw('text-gray-500 text-center')}>
            {searchQuery ? 'រកមិនឃើញរូបមន្ត' : 'មិនទាន់មានរូបមន្ត'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredFormulas}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={tw('flex-row gap-3')}
          renderItem={({ item, index }) => {
            const isLastOddElement =
              filteredFormulas.length % 2 === 1 &&
              index === filteredFormulas.length - 1;
            return (
              <Pressable
                key={item.id}
                onPress={() => setSelectedFormula(item)}
                style={[
                  tw('bg-white rounded-3xl border border-gray-200 overflow-hidden mb-3 flex-1'),
                  isLastOddElement
                    ? { maxWidth: '49%' }
                    : { maxWidth: '100%' }
                ]}
              >
                <View style={tw('bg-indigo-50 p-3 border-b border-gray-300')}>
                  <Text style={tw('font-bold text-gray-800')} numberOfLines={2}>
                    {item.title}
                  </Text>
                </View>
                <View style={tw('p-3 bg-gray-50')}>
                  <Text style={tw('text-center w-full h-12')}>
                    {item.formula}
                  </Text>
                </View>
                {/* <View style={tw('p-2')}>
                  <Text style={tw('text-indigo-600 text-sm font-semibold')}>មើលលម្អិត →</Text>
                </View> */}
              </Pressable>
            );
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw('')}
        />
      )}

      <Modal
        visible={!!selectedFormula}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedFormula(null)}
      >
        <Pressable
          style={tw('flex-1 bg-black/50 justify-center p-4')}
          onPress={() => setSelectedFormula(null)}
        >
          <Pressable
            style={tw('bg-white rounded-3xl max-h-[85%]')}
            onPress={(e) => e.stopPropagation()}
          >
            {selectedFormula && (
              <>
                <View style={tw('bg-indigo-600 p-4 rounded-t-3xl flex-row justify-between items-start ')}>
                  <Text style={tw('text-white text-lg font-bold flex-1')} numberOfLines={2}>
                    {selectedFormula.title}
                  </Text>
                  <Pressable onPress={() => setSelectedFormula(null)}>
                    <X size={24} color="#fff" />
                  </Pressable>
                </View>
                <ScrollView style={tw('p-4')}>
                  <View style={tw('bg-gray-50 rounded-2xl p-4 pt-12 border-2 border-gray-200 mb-4 ')}>
                    {/* <Text style={tw('text-gray-500 text-sm mb-1')}>រូបមន្ត</Text> */}
                    <Text style={tw('text-center w-full text-2xl h-16 items-center justify-center')}>
                      {selectedFormula.formula}
                    </Text>
                  </View>
                  {selectedFormula.description ? (
                    <View style={tw('mb-4')}>
                      <Text style={tw('font-semibold text-gray-800 mb-2')}>ពណ៌នា</Text>
                      <Text style={tw('text-gray-700')}>{selectedFormula.description}</Text>
                    </View>
                  ) : null}
                  {selectedFormula.variables?.length ? (
                    <View>
                      <Text style={tw('font-semibold text-gray-800 mb-2')}>អថេរ</Text>
                      {selectedFormula.variables.map((v, i) => (
                        <View key={i} style={tw('flex-row items-center gap-2 p-2 bg-gray-50 rounded-xl mb-2')}>
                          <Text style={tw('font-mono font-bold text-indigo-600')}>{v.symbol}</Text>
                          <View>
                            <Text style={tw('font-medium text-gray-800')}>{v.name}</Text>
                            {v.unit ? (
                              <Text style={tw('text-sm text-gray-600')}>ឯកតា: {v.unit}</Text>
                            ) : null}
                          </View>
                        </View>
                      ))}
                    </View>
                  ) : null}
                </ScrollView>
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
