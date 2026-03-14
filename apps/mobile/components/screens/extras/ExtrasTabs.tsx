import { View, Pressable, ScrollView } from 'react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

export const EXTRAS_TABS = [
  { label: 'បណ្ណាល័យ', slug: 'books' as const },
  { label: 'រូបមន្ត', slug: 'formula' as const },
  { label: 'គណនាពិន្ទុ', slug: 'calculate' as const },
] as const;

export type ExtrasTabSlug = (typeof EXTRAS_TABS)[number]['slug'];

interface ExtrasTabsProps {
  activeTab: ExtrasTabSlug;
  onTabChange: (tab: ExtrasTabSlug) => void;
}

export default function ExtrasTabs({ activeTab, onTabChange }: ExtrasTabsProps) {
  return (
    <View style={tw('bg-white border-b border-indigo-500/10 pb-2 mb-3')}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw('flex-row gap-2 px-0')}
      >
        {EXTRAS_TABS.map((tab) => {
          const isActive = activeTab === tab.slug;
          return (
            <Pressable
              key={tab.slug}
              onPress={() => onTabChange(tab.slug)}
              style={tw(
                `px-4 py-2 rounded-full border ${
                  isActive
                    ? 'bg-indigo-50/80 border-indigo-600'
                    : 'border-indigo-500/10 bg-transparent'
                }`
              )}
            >
              <Text
                style={tw(
                  `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
                )}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
