import { useState, useEffect } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Mail, ArrowLeft, Lock, Eye, EyeOff } from 'lucide-react-native';
import { getValidationError } from '@core-utils/validator';
import VerifyOTP from './VerifyOTP';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

export interface ForgetPasswordProps {
    email: string;
    setEmail: (email: string) => void;
    isSubmitting: boolean;
    errorMessage: string | null;
    onOtpSent: () => void;
    onBackToLogin: () => void;
    isOtpSent: boolean;
    onPasswordReset: () => void;
    newPassword: string;
    confirmPassword: string;
    setNewPassword: (password: string) => void;
    setConfirmPassword: (password: string) => void;
    passwordError: string | null;
    forgotOtpCode: string;
    setForgotOtpCode: (code: string) => void;
    onVerifyOtp: () => void;
    resetToken: string | null;
    otpExpiresIn?: number;
    resetTokenExpiresIn?: number;
}

export default function ForgetPassword({
    email,
    setEmail,
    isSubmitting,
    errorMessage,
    onOtpSent,
    onBackToLogin,
    isOtpSent,
    onPasswordReset,
    newPassword,
    confirmPassword,
    setNewPassword,
    setConfirmPassword,
    passwordError,
    setForgotOtpCode,
    forgotOtpCode,
    onVerifyOtp,
    resetToken,
    otpExpiresIn,
    resetTokenExpiresIn,
}: ForgetPasswordProps) {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [tokenCountdown, setTokenCountdown] = useState<number>(resetTokenExpiresIn ?? 0);

    useEffect(() => {
        if (!resetToken || !resetTokenExpiresIn) return;
        setTokenCountdown(resetTokenExpiresIn);
    }, [resetToken, resetTokenExpiresIn]);

    useEffect(() => {
        if (!resetToken || tokenCountdown <= 0) return;
        const timer = setInterval(() => {
            setTokenCountdown((prev) => (prev <= 1 ? 0 : prev - 1));
        }, 1000);
        return () => clearInterval(timer);
    }, [resetToken, tokenCountdown]);

    const formatCountdown = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const isTokenExpired = resetToken !== null && tokenCountdown <= 0;

    // OTP sent but not verified yet — show OTP verification
    if (isOtpSent && !resetToken) {
        return (
            <VerifyOTP
                otpCode={forgotOtpCode}
                setOtpCode={setForgotOtpCode}
                otpEmail={email}
                isSubmitting={isSubmitting}
                errorMessage={errorMessage}
                onVerify={onVerifyOtp}
                onResendOtp={onOtpSent}
                resendCooldownSeconds={otpExpiresIn ?? 90}
                onBack={onBackToLogin}
            />
        );
    }

    // Reset token received — show new password form
    if (isOtpSent && resetToken) {
        return (
            <View style={tw('gap-4')}>
                <Pressable onPress={onBackToLogin} style={tw('flex-row items-center gap-2')}>
                    <ArrowLeft size={18} color="#4f46e5" />
                    <Text style={tw('text-sm font-medium text-indigo-600')}>ត្រឡប់ក្រោយ</Text>
                </Pressable>

                <Text style={tw('text-xl font-semibold text-gray-900')}>កំណត់ពាក្យសម្ងាត់ថ្មី</Text>
                <Text style={tw('text-sm text-gray-600')}>សូមបញ្ចូលពាក្យសម្ងាត់ថ្មីរបស់អ្នក</Text>

                <View>
                    <Text style={tw('text-sm font-kh-medium text-gray-700 mb-2')}>ពាក្យសម្ងាត់ថ្មី</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={newPassword}
                            onChangeText={setNewPassword}
                            secureTextEntry={!showNewPassword}
                            style={[tw('flex-1 p-4 bg-gray-50 rounded-full font-kh-medium'), styles.input]}
                            placeholder="បញ្ចូលពាក្យសម្ងាត់ថ្មីរបស់អ្នក"
                            placeholderTextColor="#9ca3af"
                            editable={!isSubmitting}
                            autoCapitalize="none"
                        />
                        <Pressable
                            onPress={() => setShowNewPassword(!showNewPassword)}
                            style={styles.rightIcon}
                        >
                            {showNewPassword ? <EyeOff size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
                        </Pressable>
                    </View>
                    {newPassword && newPassword.length < 8 && (
                        <Text style={tw('text-red-500 text-sm mt-1')}>ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងតិច ៨ តួអក្សរ</Text>
                    )}
                </View>

                <View>
                    <Text style={tw('text-sm font-kh-medium text-gray-700 mb-2')}>បញ្ជាក់ពាក្យសម្ងាត់</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={!showConfirmPassword}
                            style={[tw('flex-1 p-4 bg-gray-50 rounded-full font-kh-medium'), styles.input]}
                            placeholder="បញ្ជាក់ពាក្យសម្ងាត់របស់អ្នក"
                            placeholderTextColor="#9ca3af"
                            editable={!isSubmitting}
                            autoCapitalize="none"
                        />
                        <Pressable
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                            style={styles.rightIcon}
                        >
                            {showConfirmPassword ? <EyeOff size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
                        </Pressable>
                    </View>
                    {confirmPassword && newPassword !== confirmPassword && (
                        <Text style={tw('text-red-500 text-sm mt-1')}>ពាក្យសម្ងាត់មិនត្រូវគ្នាទេ</Text>
                    )}
                </View>

                {passwordError && (
                    <View style={tw('rounded-full bg-red-50 p-4')}>
                        <Text style={tw('text-red-600 text-sm')}>{passwordError}</Text>
                    </View>
                )}

                <Pressable
                    onPress={onPasswordReset}
                    disabled={
                        !newPassword ||
                        !confirmPassword ||
                        newPassword !== confirmPassword ||
                        newPassword.length < 8 ||
                        isSubmitting ||
                        isTokenExpired
                    }
                    style={tw(`w-full bg-indigo-600 py-4 rounded-full ${(!newPassword || !confirmPassword || newPassword !== confirmPassword || newPassword.length < 8 || isSubmitting || isTokenExpired) ? 'opacity-50' : ''}`)}
                >
                    <Text style={tw('text-white text-center font-semibold text-base')}>
                        {isSubmitting ? 'កំពុងកំណត់...' : 'កំណត់ពាក្យសម្ងាត់'}
                    </Text>
                </Pressable>
            </View>
        );
    }

    // Initial state — email form to send OTP
    return (
        <View style={tw('gap-4')}>
            <Pressable onPress={onBackToLogin} style={tw('flex-row items-center gap-2')}>
                <ArrowLeft size={18} color="#4f46e5" />
                <Text style={tw('text-sm font-medium text-indigo-600')}>ត្រឡប់ក្រោយ</Text>
            </Pressable>

            <Text style={tw('text-xl font-semibold text-gray-900')}>កំណត់ពាក្យសម្ងាត់ថ្មី</Text>
            <Text style={tw('text-sm text-gray-600')}>
                បញ្ចូលអ៊ីមែលរបស់អ្នក ហើយយើងនឹងផ្ញើតំណភ្ជាប់កំណត់ពាក្យសម្ងាត់ឡើងវិញ
            </Text>

            <View>
                <Text style={tw('text-sm font-kh-medium text-gray-700 mb-2')}>អ៊ីមែល</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={[tw('flex-1 p-4 bg-gray-50 rounded-full font-kh-medium'), styles.input]}
                        placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                        placeholderTextColor="#9ca3af"
                        editable={!isSubmitting}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </View>
                {email && getValidationError('email', email) && (
                    <Text style={tw('text-red-500 text-sm mt-1')}>{getValidationError('email', email)}</Text>
                )}
            </View>

            {errorMessage && (
                <View style={tw('rounded-full bg-red-50 p-4')}>
                    <Text style={tw('text-red-600 text-sm')}>{errorMessage}</Text>
                </View>
            )}

            <Pressable
                onPress={onOtpSent}
                disabled={!email || !!getValidationError('email', email) || isSubmitting}
                style={tw(`w-full bg-indigo-600 py-4 rounded-full ${(!email || !!getValidationError('email', email) || isSubmitting) ? 'opacity-50' : ''}`)}
            >
                <Text style={tw('text-white text-center font-semibold text-base')}>
                    {isSubmitting ? 'កំពុងផ្ញើ...' : 'បញ្ជូន'}
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
    rightIcon: {
        position: 'absolute',
        right: 16,
        zIndex: 1,
    },
});
