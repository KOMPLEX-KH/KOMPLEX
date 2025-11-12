import { View } from 'react-native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { AlertTriangle } from 'lucide-react-native';
import { WarningBoxProps } from "@core-types/docs/boxProps";

export default function WarningBox({
  content,
  icon: Icon = AlertTriangle,
}: WarningBoxProps) {
  return (
    <View style={tw("bg-red-50 border rounded-3xl border-red-600 p-4 my-6")}>
      <View style={tw("flex-row items-center gap-3 mb-3")}>
        <Icon size={20} color="#dc2626" />
        <Text style={tw("text-red-600 font-semibold text-lg")}>ប្រុងប្រយត្ន័</Text>
      </View>
      {typeof content === 'string' ? (
        <Text style={tw("text-gray-700")}>{content}</Text>
      ) : (
        <View>{content}</View>
      )}
    </View>
  );
}
