import { View, Pressable, Image } from 'react-native';
import { User } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import type { Book } from '@core-types/api-types/books';

interface BookCardProps {
  book: Book;
  onPress?: (id: number) => void;
}

export default function BookCard({ book, onPress }: BookCardProps) {
  return (
    <Pressable
      onPress={() => onPress?.(book.id)}
      style={tw('bg-white rounded-3xl border border-gray-200 overflow-hidden flex-1 aspect-[9/13]')}
    >
      <View style={tw('bg-gray-200')}>
        <Image
          source={{ uri: book.imageUrl }}
          style={tw('w-full h-full')}
          resizeMode="cover"
        />
      </View>
      <View style={tw('p-3 gap-1')}>
        <Text style={tw('font-bold text-base text-gray-900')} numberOfLines={2}>
          {book.title}
        </Text>
        <View style={tw('flex-row items-center gap-1.5')}>
          <User size={14} color="#6b7280" />
          <Text style={tw('text-gray-600 text-xs')} numberOfLines={1}>
            {book.author}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
