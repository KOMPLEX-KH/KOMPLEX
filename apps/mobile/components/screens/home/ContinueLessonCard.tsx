import { Pressable, View, type StyleProp, type ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "@/components/common/Text";
import { useTheme } from "@/src/providers/ThemeProvider";
import { ArrowRight } from "lucide-react-native";

interface ContinueLessonCardProps {
  title: string;
  buttonLabel?: string;
  onPress: () => void;
  hasLastLesson?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export default function ContinueLessonCard({
  title,
  buttonLabel = "បន្តមេរៀន",
  onPress,
  hasLastLesson = false,
  containerStyle,
  disabled = false,
}: ContinueLessonCardProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.xl,
          borderWidth: 1,
          borderColor: theme.colors.border,
          paddingVertical: theme.spacing.x2,
          paddingHorizontal: theme.spacing.x2,
          gap: theme.spacing.x1,
          shadowColor: theme.colors.shadow,
          shadowOpacity: 0.2,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 4 },
          elevation: 3,
        },
        containerStyle,
      ]}
    >
      <Text
        style={{
          fontSize: 13,
          fontWeight: "600",
          color: theme.colors.textMuted,
        }}
      >
        {hasLastLesson ? "មេរៀនចុងក្រោយ" : "ចាប់ផ្តើមមេរៀនថ្មី"}
      </Text>

      <Text
        numberOfLines={2}
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: theme.colors.text,
          minHeight: 44,
        }}
      >
        {title}
      </Text>

      <Pressable
        disabled={disabled}
        onPress={onPress}
        style={({ pressed }) => [
          {
            marginTop: 4,
            borderRadius: theme.radius.pill,
            overflow: "hidden",
            opacity: disabled ? 0.5 : pressed ? 0.9 : 1,
          },
        ]}
      >
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            paddingVertical: 14,
            paddingHorizontal: theme.spacing.x2,
            borderRadius: theme.radius.pill,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Text
            style={{
              color: theme.colors.textInverse,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            {buttonLabel}
          </Text>
          <ArrowRight size={18} color={theme.colors.textInverse} />
        </LinearGradient>
      </Pressable>
    </View>
  );
}