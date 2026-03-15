import { useState, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { tw } from '@/utils/styles';
import { HEADER_CONFIG } from '@/constants/header-config';
import ExtrasTabs, { type ExtrasTabSlug } from '@/components/screens/extras/ExtrasTabs';
import BooksContent from '@/components/screens/extras/library/BooksContent';
import FormulaContent from '@/components/screens/extras/formula/FormulaContent';
import CalculateContent from '@/components/screens/extras/calculate/CalculateContent';

export default function ExtrasPage() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<ExtrasTabSlug>('books');

  useLayoutEffect(() => {
    navigation.setOptions({
      ...HEADER_CONFIG,
      headerTitle: 'បន្ធែម',
    });
  }, [navigation]);

  const renderContent = () => {
    switch (activeTab) {
      case 'books':
        return <BooksContent />;
      case 'formula':
        return <FormulaContent />;
      case 'calculate':
        return <CalculateContent />;
      default:
        return <BooksContent />;
    }
  };

  return (
    <View style={tw('flex-1 bg-gray-50')}>
      <View style={tw('px-4 pt-16 bg-white ')}>
        <ExtrasTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </View>
      <View style={tw('flex-1 px-4 py-4')}>
        <View style={tw('flex-1 ')}>
          {renderContent()}
        </View>
      </View>
    </View>
  );
}
