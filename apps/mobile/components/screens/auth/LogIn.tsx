import { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { authService } from '@/services/index';
import ForgetPassword from './ForgetPassword';

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
    onForgotPasswordChange?: (active: boolean) => void;
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
    onForgotPasswordChange,
}: LoginFormProps) {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [forgotError, setForgotError] = useState<string | null>(null);
    const [isForgotSubmitting, setIsForgotSubmitting] = useState(false);
    const [resetToken, setResetToken] = useState<string | null>(null);
    const [forgotOtp, setForgotOtp] = useState('');
    const [otpExpiresIn, setOtpExpiresIn] = useState<number | undefined>(undefined);
    const [resetTokenExpiresIn, setResetTokenExpiresIn] = useState<number | undefined>(undefined);

    const setForgotView = (active: boolean) => {
        setShowForgotPassword(active);
        onForgotPasswordChange?.(active);
    };

    const handleForgotPasswordClick = () => {
        setForgotView(true);
        setForgotError(null);
    };

    const handleBackToLogin = () => {
        setForgotView(false);
        setForgotPasswordEmail('');
        setIsOtpSent(false);
        setNewPassword('');
        setConfirmPassword('');
        setForgotError(null);
    };

    const handleForgotPasswordSentOtp = async () => {
        if (!forgotPasswordEmail) return;
        setIsForgotSubmitting(true);
        setForgotError(null);
        try {
            const res = await authService.sendForgetPasswordOtp(forgotPasswordEmail);
            setOtpExpiresIn(res.data.expiresIn);
            setIsOtpSent(true);
        } catch (error: unknown) {
            const status = (error as { response?: { status?: number } })?.response?.status;
            if (status === 429) {
                setForgotError('អ្នកបានព្យាយាមលេីសកំណត់។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ។');
            } else {
                setForgotError('បញ្ហាក្នុងការស្នើសួតការកំណត់ពាក្យសម្ងាត់ថ្មី។ សូមព្យាយាមម្តងទៀត។');
            }
        } finally {
            setIsForgotSubmitting(false);
        }
    };

    const handleVerifyForgetPasswordOtp = async () => {
        setIsForgotSubmitting(true);
        setForgotError(null);
        try {
            const res = await authService.verifyForgetPasswordOtp({ email: forgotPasswordEmail, otp: forgotOtp });
            setResetToken(res.data.verificationToken);
            setResetTokenExpiresIn(res.data.expiresIn);
        } catch (err) {
            const status = (err as { response?: { status?: number } })?.response?.status;
            if (status === 429) {
                setForgotError('អ្នកបានព្យាយាមលេីសកំណត់។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ។');
            } else {
                setForgotError('ការផ្ទៀងផ្ទាត់ OTP បានបរាជ័យ។ សូមព្យាយាមម្តងទៀត។');
            }
        } finally {
            setIsForgotSubmitting(false);
        }
    };

    const handleNewPasswordSubmit = async () => {
        if (!newPassword || !confirmPassword || newPassword !== confirmPassword || newPassword.length < 8) {
            setForgotError('សូមបញ្ចូលពាក្យសម្ងាត់ត្រឹមត្រូវ');
            return;
        }
        setForgotError(null);
        setIsForgotSubmitting(true);
        try {
            await authService.resetPassword({
                email: forgotPasswordEmail,
                newPassword,
                resetToken: resetToken!,
            });
            handleBackToLogin();
        } catch {
            setForgotError('បញ្ហាក្នុងការកំណត់ពាក្យសម្ងាត់ថ្មី។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsForgotSubmitting(false);
        }
    };

    if (showForgotPassword) {
        return (
            <ForgetPassword
                email={forgotPasswordEmail}
                setEmail={setForgotPasswordEmail}
                isSubmitting={isForgotSubmitting}
                errorMessage={forgotError}
                onOtpSent={handleForgotPasswordSentOtp}
                onBackToLogin={handleBackToLogin}
                isOtpSent={isOtpSent}
                onPasswordReset={handleNewPasswordSubmit}
                newPassword={newPassword}
                confirmPassword={confirmPassword}
                setNewPassword={setNewPassword}
                setConfirmPassword={setConfirmPassword}
                passwordError={forgotError}
                forgotOtpCode={forgotOtp}
                setForgotOtpCode={setForgotOtp}
                onVerifyOtp={handleVerifyForgetPasswordOtp}
                resetToken={resetToken}
                otpExpiresIn={otpExpiresIn}
                resetTokenExpiresIn={resetTokenExpiresIn}
            />
        );
    }

    return (
        <View style={tw("gap-6")}>
            <View>
                <Text style={tw("text-sm font-kh-medium text-gray-700 mb-3")}>
                    អ៊ីមែល
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={loginIdentifier}
                        onChangeText={setLoginIdentifier}
                        style={[tw("flex-1 p-4  bg-gray-50 rounded-full font-kh-medium"), styles.input]}
                        placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                        placeholderTextColor="#9ca3af"
                        editable={!isSubmitting}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </View>
            </View>

            <View>
                <Text style={tw("text-sm font-kh-medium text-gray-700 mb-3")}>
                    ពាក្យសម្ងាត់
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={loginPassword}
                        onChangeText={setLoginPassword}
                        secureTextEntry={!showPassword}
                        style={[tw("flex-1  p-4 bg-gray-50 rounded-full font-kh-medium"), styles.input]}
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

            <View style={tw("flex-row items-center justify-end")}>
                <Pressable onPress={handleForgotPasswordClick}>
                    <Text style={tw("text-sm text-indigo-600 font-medium")}>ភ្លេចពាក្យសម្ងាត់?</Text>
                </Pressable>
            </View>

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