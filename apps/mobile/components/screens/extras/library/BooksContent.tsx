import { useState, useEffect, useMemo } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
  Linking,
} from 'react-native';
import { Search, BookOpen, ArrowRight, ArrowLeft, User, GraduationCap } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { feedBooksService, feedCurriculumsService } from '@/services/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Book } from '@core-types/api-types/books';
import type { Grade, Subject } from '@core-types/api-types/curriculum';
import BookCard from './BookCard';

type ViewMode = 'list' | 'category' | 'book';

export default function BooksContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [curriculum, setCurriculum] = useState<Grade[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [booksRes, curriculumStored] = await Promise.all([
          feedBooksService.getAllBooks(),
          AsyncStorage.getItem('curriculum'),
        ]);
        if (!mounted) return;
        setBooks(booksRes.data ?? []);
        if (curriculumStored) {
          setCurriculum(JSON.parse(curriculumStored));
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (curriculum.length === 0) {
      feedCurriculumsService.getCurriculum().then((res) => {
        setCurriculum(res.data);
        AsyncStorage.setItem('curriculum', JSON.stringify(res.data));
      });
    }
  }, [curriculum.length]);

  const allSubjects = useMemo(
    () =>
      curriculum.flatMap((grade) =>
        grade.subjects.map((s) => ({ id: s.id, name: s.name }))
      ),
    [curriculum]
  );
  const displaySubjects = useMemo(
    () =>
      allSubjects.filter((s) => books.some((b) => b.subjectId === s.id)),
    [allSubjects, books]
  );
  const recommendedBooks = useMemo(
    () => books.filter((b) => b.isRecommended),
    [books]
  );
  const filteredBySearch = useMemo(() => {
    if (!searchQuery.trim()) return null;
    return books.filter(
      (b) =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (b.author?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [books, searchQuery]);

  const handleBookPress = (id: number) => {
    setSelectedBookId(id);
    setViewMode('book');
  };

  const handleViewAllCategory = (subjectId: number) => {
    setSelectedCategoryId(subjectId);
    setViewMode('category');
  };

  const handleBack = () => {
    setViewMode('list');
    setSelectedCategoryId(null);
    setSelectedBookId(null);
  };

  // Category view: list books in one category
  if (viewMode === 'category' && selectedCategoryId !== null) {
    const booksInCategory = books.filter((b) => b.subjectId === selectedCategoryId);
    const subject = allSubjects.find((s) => s.id === selectedCategoryId);
    return (
      <View style={tw('flex-1')}>
        <Pressable onPress={handleBack} style={tw('flex-row items-center gap-2 mb-4')}>
          <ArrowLeft size={20} color="#4f46e5" />
          <Text style={tw('text-indigo-600 font-semibold')}>ត្រឡប់ក្រោយ</Text>
        </Pressable>
        <Text style={tw('text-lg font-bold text-gray-800 mb-3')}>
          {subject?.name ?? 'សៀវភៅ'}
        </Text>
        {booksInCategory.length === 0 ? (
          <Text style={tw('text-gray-500 py-4')}>គ្មានសៀវភៅសម្រាប់ប្រភេទនេះ</Text>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw('flex-row flex-wrap gap-3 justify-between')}>
              {booksInCategory.map((b) => (
                <BookCard key={b.id} book={b} onPress={handleBookPress} />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    );
  }

  // Book detail view
  if (viewMode === 'book' && selectedBookId !== null) {
    const book = books.find((b) => b.id === selectedBookId);
    if (!book) {
      handleBack();
      return null;
    }
    const relatedBooks = books.filter(
      (b) => b.subjectId === book.subjectId && b.id !== book.id
    ).slice(0, 6);
    const gradeInfo = curriculum.find((g) => g.id === book.gradeId);

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={handleBack} style={tw('flex-row items-center gap-2 mb-4')}>
          <ArrowLeft size={20} color="#4f46e5" />
          <Text style={tw('text-indigo-600 font-semibold')}>ត្រឡប់ក្រោយ</Text>
        </Pressable>
        <View style={tw('mb-4')}>
          <View style={tw('items-center mb-4')}>
            <View style={tw('aspect-[9/13] w-48 mb-2')}>
              <Image
                source={{ uri: book.imageUrl }}
                style={tw('w-full h-full rounded-3xl')}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={tw('px-2')}>
            <Text style={tw('text-lg font-bold text-gray-900 mb-2 text-center')}>{book.title}</Text>
            <View style={tw('flex-row items-center justify-center gap-3 mb-2')}>
              <User size={16} color="#6b7280" />
              <Text style={tw('text-gray-700 text-sm')}>{book.author}</Text>
              {gradeInfo ? (
                <View style={tw('flex-row items-center gap-1')}>
                  <GraduationCap size={16} color="#059669" />
                  <Text style={tw('text-green-700 font-medium text-xs')}>{gradeInfo.name}</Text>
                </View>
              ) : null}
            </View>
            {book.description ? (
              <Text style={tw('text-gray-600 text-sm mb-3 text-center')}>{book.description}</Text>
            ) : null}
            {book.pdfUrl ? (
              <Pressable
                onPress={() => Linking.openURL(book.pdfUrl!)}
                style={tw('bg-indigo-600 py-2 rounded-full')}
              >
                <Text style={tw('text-white text-center font-semibold')}>ចាប់ផ្តើមអាន</Text>
              </Pressable>
            ) : null}
          </View>
        </View>
        {relatedBooks.length > 0 && (
          <>
            <Text style={tw('text-lg font-bold text-gray-800 mb-3')}>
              សៀវភៅពាក់ព័ន្ធផ្សេងៗទៀត
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={tw('flex-row gap-3 pb-2')}>
                {relatedBooks.map((b) => (
                  <BookCard key={b.id} book={b} onPress={handleBookPress} />
                ))}
              </View>
            </ScrollView>
          </>
        )}
      </ScrollView>
    );
  }

  // Main list view
  if (loading) {
    return (
      <View style={tw('flex-1 items-center justify-center py-12')}>
        <ActivityIndicator size="large" color="#4f46e5" />
      </View>
    );
  }

  return (
    <View style={tw('flex-1')}>
      <View style={tw('relative mb-4 flex-row items-center border border-gray-300 rounded-full bg-white pl-4')}>
        <Search size={20} color="#9ca3af" />
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="ស្វែងរកសៀវភៅ..."
          style={tw('flex-1 px-3 py-3')}
          placeholderTextColor="#9ca3af"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredBySearch !== null ? (
          <View style={tw('mb-6')}>
            <Text style={tw('text-base font-bold text-gray-800 mb-3')}>លទ្ធផលស្វែងរក</Text>
            {filteredBySearch.length === 0 ? (
              <Text style={tw('text-gray-500')}>មិនមានលទ្ធផល</Text>
            ) : (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={tw('flex-row flex-wrap gap-3')}>
                  {filteredBySearch.slice(0, 12).map((b) => (
                    <BookCard key={b.id} book={b} onPress={handleBookPress} />
                  ))}
                </View>
              </ScrollView>
            )}
          </View>
        ) : (
          <>
            {recommendedBooks.length > 0 && (
              <View style={tw('mb-6')}>
                <View style={tw('flex-row items-center gap-2 mb-3')}>
                  <View style={tw('p-2 bg-blue-600 rounded-2xl')}>
                    <BookOpen size={20} color="#fff" />
                  </View>
                  <View>
                    <Text style={tw('text-lg font-bold text-gray-800')}>ណែនាំ</Text>
                    <Text style={tw('text-gray-500 text-xs')}>សៀវភៅដែលអ្នកនឹងចូលចិត្ត</Text>
                  </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={tw('flex-row gap-3 pb-2')}>
                    {recommendedBooks.map((b) => (
                      <BookCard key={b.id} book={b} onPress={handleBookPress} />
                    ))}
                  </View>
                </ScrollView>
              </View>
            )}
            {displaySubjects.map((subject) => {
              const booksInSubject = books.filter((b) => b.subjectId === subject.id);
              if (booksInSubject.length === 0) return null;
              return (
                <View key={subject.id} style={tw('mb-6')}>
                  <View style={tw('flex-row items-center justify-between mb-3')}>
                    <View style={tw('flex-row items-center gap-2')}>
                      <View style={tw('p-2 bg-blue-600 rounded-2xl')}>
                        <BookOpen size={20} color="#fff" />
                      </View>
                      <View>
                        <Text style={tw('text-lg font-bold text-gray-800')}>{subject.name}</Text>
                        <Text style={tw('text-gray-500 text-xs')}>សៀវភៅដែលមានការពេញនិយម</Text>
                      </View>
                    </View>
                    <Pressable
                      onPress={() => handleViewAllCategory(subject.id)}
                      style={tw('flex-row items-center gap-1 bg-indigo-50 px-3 py-2 rounded-full')}
                    >
                      <Text style={tw('text-indigo-600 font-semibold text-sm')}>មើលទាំងអស់</Text>
                      <ArrowRight size={16} color="#4f46e5" />
                    </Pressable>
                  </View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={tw('flex-row gap-3 pb-2')}>
                      {booksInSubject.map((b) => (
                        <BookCard key={b.id} book={b} onPress={handleBookPress} />
                      ))}
                    </View>
                  </ScrollView>
                </View>
              );
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
}
