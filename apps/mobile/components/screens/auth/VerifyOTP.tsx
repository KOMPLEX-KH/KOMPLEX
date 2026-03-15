import { useRef, useEffect, useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Keyboard } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

export interface VerifyOTPProps {
    otpCode: string;
    setOtpCode: (code: string) => void;
    otpEmail: string;
    isSubmitting: boolean;
    errorMessage: string | null;
    onVerify: () => void;
    onResendOtp: () => void;
    /** OTP expiry in seconds — value from backend (e.g. expiresIn). */
    resendCooldownSeconds: number;
    /** Optional back handler — shows back button when provided. */
    onBack?: () => void;
}

export default function VerifyOTP({
    otpCode,
    setOtpCode,
    otpEmail,
    isSubmitting,
    errorMessage,
    onVerify,
    onResendOtp,
    resendCooldownSeconds,
    onBack,
}: VerifyOTPProps) {
    const [resendCountdown, setResendCountdown] = useState(resendCooldownSeconds);
    const [localError, setLocalError] = useState<string | null>(errorMessage);
    const inputRefs = useRef<(TextInput | null)[]>([]);
    const otpArray = otpCode.padEnd(6, '').split('').slice(0, 6);

    useEffect(() => {
        setResendCountdown(resendCooldownSeconds);
    }, [resendCooldownSeconds]);

    useEffect(() => {
        setLocalError(errorMessage);
    }, [errorMessage]);

    useEffect(() => {
        if (resendCountdown <= 0) return;
        const timer = setInterval(() => {
            setResendCountdown((prev) => (prev <= 1 ? 0 : prev - 1));
        }, 1000);
        return () => clearInterval(timer);
    }, [resendCountdown]);

    const handleInputChange = (index: number, value: string) => {
        if (value.length > 1) {
            const pastedCode = value.replace(/\D/g, '').slice(0, 6);
            setOtpCode(pastedCode);
            setLocalError(null);
            const nextIndex = Math.min(pastedCode.length - 1, 5);
            inputRefs.current[nextIndex]?.focus();
            return;
        }
        if (/^\d?$/.test(value)) {
            const newOtpArray = [...otpArray];
            newOtpArray[index] = value;
            const newOtpCode = newOtpArray.join('').replace(/\s/g, '');
            setLocalError(null);
            setOtpCode(newOtpCode);
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyPress = (index: number, e: { nativeEvent: { key: string } }) => {
        if (e.nativeEvent.key === 'Backspace' && !otpArray[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleResendClick = () => {
        if (resendCountdown > 0) return;
        setLocalError(null);
        setOtpCode('');
        Keyboard.dismiss();
        onResendOtp();
    };

    const formatCountdown = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <View style={tw('gap-4')}>
            {onBack && (
                <Pressable onPress={onBack} style={tw('flex-row items-center gap-2')}>
                    <ArrowLeft size={18} color="#4f46e5" />
                    <Text style={tw('text-sm font-medium text-indigo-600')}>ត្រឡប់ក្រោយ</Text>
                </Pressable>
            )}

            <Text style={tw('text-xl font-semibold text-gray-900')}>បញ្ចូលលេខកូដ OTP</Text>
            <Text style={tw('text-sm text-gray-500')}>យើងបានផ្ញើលេខកូដ 6 ខ្ទង់ទៅ</Text>
            <Text style={tw('text-sm text-indigo-600 font-medium')}>{otpEmail}</Text>

            <View style={styles.otpRow}>
                {Array.from({ length: 6 }, (_, index) => (
                    <TextInput
                        key={index}
                        ref={(el) => { inputRefs.current[index] = el; }}
                        value={otpArray[index] || ''}
                        onChangeText={(v) => handleInputChange(index, v)}
                        onKeyPress={(e) => handleKeyPress(index, e)}
                        keyboardType="number-pad"
                        maxLength={6}
                        editable={!isSubmitting}
                        style={[
                            styles.otpInput,
                            (localError || errorMessage) ? styles.otpInputError : null,
                        ]}
                        placeholder=""
                        placeholderTextColor="#9ca3af"
                    />
                ))}
            </View>

            {(localError || errorMessage) && (
                <Text style={tw('text-red-500 text-sm text-center')}>{localError || errorMessage}</Text>
            )}

            <Pressable
                onPress={onVerify}
                disabled={otpCode.length !== 6 || isSubmitting}
                style={tw(`w-full bg-indigo-600 py-4 rounded-full ${otpCode.length !== 6 || isSubmitting ? 'opacity-50' : ''}`)}
            >
                <Text style={tw('text-white text-center font-semibold text-base')}>
                    {isSubmitting ? 'កំពុងផ្ទៀងផ្ទាត់...' : 'ផ្ទៀងផ្ទាត់'}
                </Text>
            </Pressable>

            <View style={tw('flex-row items-center justify-center gap-2 flex-wrap')}>
                <Text style={tw('text-sm text-gray-500')}>មិនទាន់ទទួល?</Text>
                {resendCountdown > 0 ? (
                    <Text style={tw('text-sm text-gray-400')}>
                        ផ្ញើម្តងទៀតក្នុង{' '}
                        <Text style={tw('text-indigo-500 font-medium')}>{formatCountdown(resendCountdown)}</Text>
                    </Text>
                ) : (
                    <Pressable onPress={handleResendClick}>
                        <Text style={tw('text-sm text-indigo-600 font-medium')}>ផ្ញើម្តងទៀត</Text>
                    </Pressable>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    otpRow: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
    },
    otpInput: {
        width: 44,
        height: 48,
        borderWidth: 1.5,
        borderColor: 'rgba(79, 70, 229, 0.2)',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
        color: '#111827',
    },
    otpInputError: {
        borderColor: '#ef4444',
    },
});
