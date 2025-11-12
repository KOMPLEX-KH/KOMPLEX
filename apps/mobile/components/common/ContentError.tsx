import { View, Text, Pressable } from "react-native";
import { Book, AlertCircle, RefreshCw } from "lucide-react-native";
import { tw } from "@/utils/styles";
import { useRouter, usePathname, Href } from "expo-router";

interface ContentErrorProps {
    type: "error" | "no-results";
    message?: string;
    onRetry?: () => void;
}

export default function ContentError({ type, message, onRetry }: ContentErrorProps) {
    const router = useRouter();
    const pathname = usePathname();

    const isError = type === "error";

    const handleRetry = () => {
        if (onRetry) {
            onRetry();
            return;
        }

        if (pathname) {
            router.replace(pathname as Href);
        }
    };

    const displayMessage =
        message ||
        (isError ? "មានបញ្ហាក្នុងការទាញយកប្លុក" : "រកមិនឃើញប្លុក");

    return (
        <View style={tw("items-center justify-center py-12 px-6")}>
            {isError ? (
                <AlertCircle size={64} color="#F87171" style={tw("mb-4")} />
            ) : (
                <Book size={64} color="#9CA3AF" style={tw("mb-4")} />
            )}
            <Text style={tw("text-lg font-kh-medium text-gray-900 text-center mb-4")}>
                {displayMessage}
            </Text>
            <Pressable
                onPress={handleRetry}
                style={tw("flex-row items-center gap-2 px-5 py-3 bg-indigo-600 rounded-full")}
                accessibilityRole="button"
            >
                <RefreshCw size={18} color="#FFFFFF" />
                <Text style={tw("text-white font-kh-medium text-sm")}>ព្យាយាមម្តងទៀត</Text>
            </Pressable>
        </View>
    );
}