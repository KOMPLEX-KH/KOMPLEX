'use client';

import { useState, useEffect } from 'react';
import { Mail, ArrowLeft, Lock, Eye, EyeOff } from 'lucide-react';
import { getValidationError } from '@core-utils/validator';
import VerifyOtp from './VerifyOtp';

interface ForgotPasswordProps {
    email: string;
    setEmail: (email: string) => void;
    isSubmitting: boolean;
    errorMessage: string | null;
    onOtpSent: (e: React.FormEvent) => void;
    onBackToLogin: () => void;
    isOtpSent: boolean;
    onPasswordReset: (e: React.FormEvent) => void;
    newPassword: string;
    confirmPassword: string;
    setNewPassword: (password: string) => void;
    setConfirmPassword: (password: string) => void;
    passwordError: string | null;
    forgotOtpCode: string;
    setForgotOtpCode: (forgotOtpCode: string) => void;
    onVerifyOtp: (e: React.FormEvent) => void;
    resetToken: string;
    /** OTP expiry in seconds from the backend response */
    otpExpiresIn?: number;
    /** Reset token expiry in seconds from the verify OTP response */
    resetTokenExpiresIn?: number;
}

export default function ForgotPassword({
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
    onVerifyOtp,
    setForgotOtpCode,
    forgotOtpCode,
    resetToken,
    otpExpiresIn,
    resetTokenExpiresIn,

}: ForgotPasswordProps) {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Countdown for reset token validity
    const [tokenCountdown, setTokenCountdown] = useState<number>(resetTokenExpiresIn ?? 0);

    useEffect(() => {
        if (!resetToken || !resetTokenExpiresIn) return;
        setTokenCountdown(resetTokenExpiresIn);
    }, [resetToken, resetTokenExpiresIn]);

    useEffect(() => {
        if (!resetToken || tokenCountdown <= 0) return;
        const timer = setInterval(() => {
            setTokenCountdown((prev) => {
                if (prev <= 1) { clearInterval(timer); return 0; }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [resetToken, tokenCountdown > 0]);

    const formatCountdown = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const isTokenExpired = resetToken !== null && tokenCountdown <= 0;

    // otp entered but not verified yet, show otp verification form
    if (isOtpSent && !resetToken) {
        return (
            <VerifyOtp
                otpCode={forgotOtpCode}
                setOtpCode={setForgotOtpCode}
                otpEmail={email}
                isSubmitting={isSubmitting}
                errorMessage={errorMessage}
                onVerify={onVerifyOtp}
                onResendOtp={onOtpSent}
                resendCooldownSeconds={otpExpiresIn}
                onBack={onBackToLogin}
            />
        )
    }


    // reset token received, show new password form
    if (isOtpSent && resetToken) {
        return (
            <form onSubmit={onPasswordReset} className="w-full flex flex-col gap-3">
                <button
                    type="button"
                    onClick={onBackToLogin}
                    className="w-full text-sm flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-600 font-medium"
                >
                    <ArrowLeft size={16} />
                    ត្រឡប់ក្រោយ
                </button>
                <div className='w-full flex flex-col items-center gap-4'>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-400">
                        កំណត់ពាក្យសម្ងាត់ថ្មី
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-zinc-400">
                        សូមបញ្ចូលពាក្យសម្ងាត់ថ្មីរបស់អ្នក
                    </p>


                    <div className='w-full flex flex-col gap-3'>
                        {/* New Password Field */}
                        <div className='flex flex-col items-start w-full'>
                            <label className="block text-sm font-medium text-black dark:text-zinc-400 mb-2">
                                ពាក្យសម្ងាត់ថ្មី
                            </label>
                            <div className="relative w-full">
                                <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword?.(e.target.value)}
                                    className="w-full pl-10 pr-12 py-3 border border-indigo-500/20 dark:border-indigo-800/20 rounded-full bg-white dark:bg-zinc-900 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                    placeholder="បញ្ចូលពាក្យសម្ងាត់ថ្មីរបស់អ្នក"
                                    disabled={isSubmitting}
                                    required
                                    minLength={8}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-zinc-400 hover:text-gray-600 dark:hover:text-zinc-400 transition-colors"
                                >
                                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {/* Password validation */}
                            {newPassword && newPassword.length < 8 && (
                                <p className="text-red-500 text-sm mt-1">ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងតិច ៨ តួអក្សរ</p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div className='flex flex-col items-start w-full'>
                            <label className="block text-sm font-medium text-black dark:text-zinc-400 mb-2">
                                បញ្ជាក់ពាក្យសម្ងាត់
                            </label>
                            <div className="relative w-full">
                                <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword?.(e.target.value)}
                                    className="w-full pl-10 pr-12 py-3 border border-indigo-500/20 dark:border-indigo-800/20 rounded-full bg-white dark:bg-zinc-900 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                    placeholder="បញ្ជាក់ពាក្យសម្ងាត់របស់អ្នក"
                                    disabled={isSubmitting}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-zinc-400 hover:text-gray-600 dark:hover:text-zinc-400 transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {/* Password match validation */}
                            {confirmPassword && newPassword !== confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">ពាក្យសម្ងាត់មិនត្រូវគ្នាទេ</p>
                            )}
                        </div>
                    </div>

                    {/* Error message */}
                    {passwordError && (
                        <div className="w-full rounded-3xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 text-sm p-3">
                            {passwordError}
                        </div>
                    )}

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={
                            !newPassword ||
                            !confirmPassword ||
                            newPassword !== confirmPassword ||
                            newPassword.length < 8 ||
                            isSubmitting ||
                            isTokenExpired
                        }
                        className="w-full bg-indigo-600 text-white dark:text-zinc-900 py-3 px-4 rounded-full font-semibold hover:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20 dark:border-zinc-800/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'កំពុងកំណត់...' : 'កំណត់ពាក្យសម្ងាត់'}
                    </button>
                </div>
            </form>
        );
    }


    // initial state, show email input form
    return (
        <form onSubmit={onOtpSent} className="w-full flex flex-col gap-3">
            <button
                type="button"
                onClick={onBackToLogin}
                className="w-full text-sm flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-600 font-medium"
            >
                <ArrowLeft size={16} />
                ត្រឡប់ក្រោយ
            </button>
            <div className='w-full flex flex-col items-center gap-4'>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-400">
                    កំណត់ពាក្យសម្ងាត់ថ្មី
                </h2>
                <p className="text-sm text-gray-600 dark:text-zinc-400">
                    បញ្ចូលអ៊ីមែលរបស់អ្នក ហើយយើងនឹងផ្ញើតំណភ្ជាប់កំណត់ពាក្យសម្ងាត់ឡើងវិញ
                </p>

                <div className='w-full'>
                    <label className="block text-sm font-medium text-black dark:text-zinc-400 mb-2">
                        អ៊ីមែល
                    </label>
                    <div className="relative">
                        <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 dark:border-indigo-800/20 rounded-full bg-white dark:bg-zinc-900 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                            placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                            disabled={isSubmitting}
                            required
                        />
                    </div>

                    {/* validate email */}
                    {email && getValidationError('email', email) && (
                        <p className="text-red-500 text-sm mt-1">{getValidationError('email', email)}</p>
                    )}
                </div>

                {errorMessage && (
                    <div className="w-full rounded-3xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 text-sm p-3">
                        {errorMessage}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={!email || !!getValidationError('email', email) || isSubmitting}
                    className="w-full  bg-indigo-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'កំពុងផ្ញើ...' : 'បញ្ជូន'}
                </button>
            </div>
        </form>
    );
}