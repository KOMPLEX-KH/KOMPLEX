import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

interface LoginFormProps {
    loginIdentifier: string;
    setLoginIdentifier: (value: string) => void;
    loginPassword: string;
    setLoginPassword: (value: string) => void;
    showPassword: boolean;
    setShowPassword: (show: boolean) => void;
    isLoginValid: () => boolean;
    handleLogin: () => void;
    isSubmitting?: boolean;
    errorMessage?: string | null;
}

export default function LogIn({
    loginIdentifier,
    setLoginIdentifier,
    loginPassword,
    setLoginPassword,
    showPassword,
    setShowPassword,
    isLoginValid,
    handleLogin,
    isSubmitting = false,
    errorMessage = null,
}: LoginFormProps) {
    return (
        <View style={tw("gap-6")}>
            <View>
                <Text style={tw("text-sm font-medium text-gray-700 mb-3")}>
                    អ៊ីមែល ឬ ឈ្មោះអ្នកប្រើប្រាស់
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={loginIdentifier}
                        onChangeText={setLoginIdentifier}
                        style={[tw("flex-1 p-4  bg-gray-50 rounded-full"), styles.input]}
                        placeholder="បញ្ចូលអ៊ីមែល ឬ ឈ្មោះអ្នកប្រើប្រាស់"
                        placeholderTextColor="#9ca3af"
                        editable={!isSubmitting}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </View>
            </View>

            <View>
                <Text style={tw("text-sm font-medium text-gray-700 mb-3")}>
                    ពាក្យសម្ងាត់
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={loginPassword}
                        onChangeText={setLoginPassword}
                        secureTextEntry={!showPassword}
                        style={[tw("flex-1  p-4 bg-gray-50 rounded-full"), styles.input]}
                        placeholder="បញ្ចូលពាក្យសម្ងាត់"
                        placeholderTextColor="#9ca3af"
                        editable={!isSubmitting}
                    />
                    <Pressable
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.rightIcon}
                        disabled={isSubmitting}
                    >
                        {showPassword ? <EyeOff size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
                    </Pressable>
                </View>
            </View>

            {errorMessage && (
                <View style={tw("w-full rounded-full bg-red-50 p-4")}>
                    <Text style={tw("text-red-600 text-sm")}>
                        {errorMessage}
                    </Text>
                </View>
            )}

            <Pressable
                onPress={handleLogin}
                disabled={!isLoginValid() || isSubmitting}
                style={tw(`w-full bg-indigo-600 py-4 rounded-full ${!isLoginValid() || isSubmitting ? 'opacity-50' : ''}`)}
            >
                <Text style={tw("text-white text-center font-semibold text-base")}>
                    {isSubmitting ? 'កំពុងចូល...' : 'ចូលទៅកាន់'}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 16,
        color: '#111827',
    },
    leftIcon: {
        position: 'absolute',
        left: 16,
        zIndex: 1,
    },
    rightIcon: {
        position: 'absolute',
        right: 16,
        zIndex: 1,
    },
});