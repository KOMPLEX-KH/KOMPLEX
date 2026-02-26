'use client';

import { useRef, useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface VerifyOtpProps {
    otpCode: string;
    setOtpCode: (code: string) => void;
    otpEmail: string;
    isSubmitting: boolean;
    errorMessage: string | null;
    onVerify: (e: React.FormEvent) => void;
    onResendOtp: (e: React.FormEvent) => void;
    /** OTP expiry in seconds — must be the value returned by the backend (e.g. expiresIn). */
    resendCooldownSeconds: number;
    /** Optional back handler — shows a back button at the top when provided. */
    onBack?: () => void;
}

export default function VerifyOtp({
    otpCode,
    setOtpCode,
    otpEmail,
    isSubmitting,
    errorMessage,
    onVerify,
    onResendOtp,
    resendCooldownSeconds,
    onBack,
}: VerifyOtpProps) {

    // Resend cooldown countdown (seconds) — driven entirely by the backend expiresIn
    const [resendCountdown, setResendCountdown] = useState(resendCooldownSeconds);

    // Local error — mirrors the prop but clears when the user starts typing again
    const [localError, setLocalError] = useState<string | null>(errorMessage);

    // Refs for each input to manage focus
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Convert string OTP to array for individual inputs
    const otpArray = otpCode.padEnd(6, '').split('').slice(0, 6);

    // Sync countdown whenever the backend-provided expiry changes (initial mount or after resend)
    useEffect(() => {
        setResendCountdown(resendCooldownSeconds);
    }, [resendCooldownSeconds]);

    // Sync new errors from parent (e.g. wrong OTP response)
    useEffect(() => {
        setLocalError(errorMessage);
    }, [errorMessage]);

    // Resend countdown timer
    useEffect(() => {
        if (resendCountdown <= 0) return;
        const timer = setInterval(() => {
            setResendCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [resendCountdown]);

    // Focus first input on mount
    useEffect(() => {
        setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }, []);

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedCode = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        if (!pastedCode) return;
        setLocalError(null);
        setOtpCode(pastedCode);
        const nextIndex = Math.min(pastedCode.length - 1, 5);
        inputRefs.current[nextIndex]?.focus();
    };

    const handleInputChange = (index: number, value: string) => {
        // Handle pasting full OTP
        if (value.length > 1) {
            const pastedCode = value.replace(/\D/g, '').slice(0, 6);
            setOtpCode(pastedCode);
            const nextIndex = Math.min(pastedCode.length - 1, 5);
            inputRefs.current[nextIndex]?.focus();
            return;
        }

        // Prevents typing letters or multiple digits in a single input.
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

    // Handle backspace and arrow navigation
    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace') {
            if (!otpArray[index] && index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleResendClick = (e: React.FormEvent) => {
        if (resendCountdown > 0) return;
        setLocalError(null);
        setOtpCode('');
        onResendOtp(e);
    };

    const formatCountdown = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <div className="flex flex-col items-center gap-3 py-4">

            {onBack && (
                <button
                    type="button"
                    onClick={onBack}
                    className="w-full text-sm flex items-center gap-2 text-indigo-600 hover:text-indigo-500 font-medium"
                >
                    <ArrowLeft size={16} />
                    ត្រឡប់ក្រោយ
                </button>
            )}

            <h3 className="text-2xl font-semibold">បញ្ចូលលេខកូដ OTP</h3>
            <p className="text-sm text-gray-500">
                យើងបានផ្ញើលេខកូដ 6 ខ្ទង់ទៅ
            </p>
            <p className="text-sm text-indigo-600">{otpEmail}</p>

            {/* OTP Inputs */}
            <div className="flex gap-2 justify-center">
                {Array.from({ length: 6 }, (_, index) => (
                    <input
                        key={index}
                        ref={(el) => {
                            inputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        value={otpArray[index] || ''}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onPaste={handlePaste}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 border border-indigo-500/20 rounded-lg text-center text-lg font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        maxLength={1}
                        disabled={isSubmitting}
                    />
                ))}
            </div>

            {/* Error message */}
            {localError && (
                <p className="text-red-500 text-sm text-center">{localError}</p>
            )}

            {/* Verify button */}
            <button
                onClick={onVerify}
                disabled={otpCode.length !== 6 || isSubmitting}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'កំពុងផ្ទៀងផ្ទាត់...' : 'ផ្ទៀងផ្ទាត់'}
            </button>

            {/* Resend OTP */}
            <div className="flex items-center gap-2 text-sm flex-wrap justify-center">
                <p className="text-gray-500">មិនទាន់ទទួល?</p>
                {resendCountdown > 0 ? (
                    <span className="text-gray-400">
                        ផ្ញើម្តងទៀតក្នុង{' '}
                        <span className="text-indigo-500 font-medium tabular-nums">
                            {formatCountdown(resendCountdown)}
                        </span>
                    </span>
                ) : (
                    <button
                        onClick={handleResendClick}
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        ផ្ញើម្តងទៀត
                    </button>
                )}
            </div>
        </div>
    );
}