import { View, Pressable } from 'react-native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { CustomBoxProps } from "@core-types/docs/boxProps";

export default function CustomBox({
  content,
  title,
  titleIcon: Icon,
  backgroundColor = "bg-white",
  borderColor = "border-gray-200",
  titleColor = "text-gray-900",
  iconColor = "text-gray-600",
  contentColor = "text-gray-700",
  showTitle = true,
  showIcon = true,
  borderWidth = "1",
  shadow = "lg",
  padding = "4",
  margin = "6",
  rounded = "2xl",
  backdropBlur = false,
  gradient = false,
  gradientFrom = "from-blue-500",
  gradientTo = "to-purple-500",
  gradientDirection = "to-r",
  hoverEffect = false,
  clickable = false,
  onClick,
}: CustomBoxProps) {
  // Map Tailwind classes to React Native styles
  const bgColor = backgroundColor.replace("bg-", "");
  const borderColorClass = borderColor.replace("border-", "");
  const paddingClass = padding;
  const marginClass = margin;
  const roundedClass = rounded;

  const Container = clickable ? Pressable : View;

  return (
    <Container
      onPress={clickable ? onClick : undefined}
      style={tw(`border-${borderWidth} border-${borderColorClass} bg-${bgColor} p-${paddingClass} my-${marginClass} rounded-${roundedClass}`)}
    >
      {/* Title Section */}
      {showTitle && title && (
        <View style={tw("flex-row items-center gap-3 mb-3")}>
          {showIcon && Icon && <Icon size={20} color={iconColor.replace("text-", "")} />}
          <Text style={tw(`${titleColor} font-semibold text-lg`)}>{title}</Text>
        </View>
      )}

      {/* Content Section */}
      <View style={tw(contentColor)}>
        {typeof content === 'string' ? (
          <Text>{content}</Text>
        ) : (
          content
        )}
      </View>
    </Container>
  );
}
