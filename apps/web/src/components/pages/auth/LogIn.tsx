'use client';

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { authService } from '@/services/index';
import ForgotPassword from '@/components/pages/auth/ForgetPassword';

interface LoginFormProps {
    loginIdentifier: string;
    setLoginIdentifier: (value: string) => void;
    loginPassword: string;
    setLoginPassword: (value: string) => void;
    showPassword: boolean;
    setShowPassword: (show: boolean) => void;
    isLoginValid: () => boolean;
    handleLogin: (e: React.FormEvent) => void;
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

    // trigger to show forgot password form
    const setForgotView = (active: boolean) => {
        setShowForgotPassword(active);
        onForgotPasswordChange?.(active);
    };

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


    // handle click forgot password link
    const handleForgotPasswordClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setForgotView(true);
        setForgotError(null);
    };

    // handle back to login form
    const handleBackToLogin = () => {
        setForgotView(false);
        setForgotPasswordEmail('');
        setIsOtpSent(false);
        setNewPassword('');
        setConfirmPassword('');
        setForgotError(null);
    };

    // handle to send otp for forgot password
    const handleForgotPasswordSentOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!forgotPasswordEmail) return;
        setIsForgotSubmitting(true);
        try {
            const res = await authService.sendForgetPasswordOtp(forgotPasswordEmail);
            setOtpExpiresIn(res.data.expiresIn);
            setIsOtpSent(true);
        } catch (error) {
            const status = (error as any)?.response?.status;
            if (status === 429) {
                setForgotError('អ្នកបានព្យាយាមលេីសកំណត់។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ។');
            } else {
                setForgotError('បញ្ហាក្នុងការស្នើសួតការកំណត់ពាក្យសម្ងាត់ថ្មី។ សូមព្យាយាមម្តងទៀត។');
            }
        } finally {
            setIsForgotSubmitting(false);
        }
    };

    const handleVerifyForgetPasswordOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsForgotSubmitting(true);
        try {
            const res = await authService.verifyForgetPasswordOtp({ email: forgotPasswordEmail, otp: forgotOtp, });
            setResetToken(res.data.verificationToken);
            setResetTokenExpiresIn(res.data.expiresIn);
        } catch (err) {
            const status = (err as any)?.response?.status;
            if (status === 429) {
                setForgotError('អ្នកបានព្យាយាមលេីសកំណត់។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ។');
            } else {
                setForgotError('ការផ្ទៀងផ្ទាត់ OTP បានបរាជ័យ។ សូមព្យាយាមម្តងទៀត។');
            }
        } finally {
            setIsForgotSubmitting(false);
        }
    }

    // handle to reset new password after verify otp
    const handleNewPasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPassword || !confirmPassword || newPassword !== confirmPassword || newPassword.length < 8) {
            setForgotError('សូមបញ្ចូលពាក្យសម្ងាត់ត្រឹមត្រូវ');
            return;
        }
        setForgotError(null);
        setIsForgotSubmitting(true);
        try {
            await authService.resetPassword({ email: forgotPasswordEmail, newPassword, resetToken });
            handleBackToLogin();
        } catch (error: any) {
            console.error('Password reset error:', error);
            setForgotError('បញ្ហាក្នុងការកំណត់ពាក្យសម្ងាត់ថ្មី។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsForgotSubmitting(false);
        }
    };

    if (showForgotPassword) {
        return (
            <ForgotPassword
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
        <form onSubmit={handleLogin} className="space-y-4 mx-auto">

            <div>
                <label className="block text-sm font-medium text-black dark:text-zinc-400 mb-2">
                    អ៊ីមែល
                </label>
                <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                    <input
                        type="text"
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 dark:border-indigo-800/20 rounded-full bg-white dark:bg-zinc-900 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                        placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                        disabled={isSubmitting}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-black dark:text-zinc-400 mb-2">
                    ពាក្យសម្ងាត់
                </label>
                <div className="relative">
                    <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-indigo-500/20 dark:border-indigo-800/20 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                        placeholder="បញ្ចូលពាក្យសម្ងាត់"
                        disabled={isSubmitting}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 dark:text-indigo-400 hover:text-gray-600 dark:hover:text-zinc-400 transition-colors"
                        disabled={isSubmitting}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
            </div>

            {errorMessage && (
                <div className="w-full rounded-3xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 text-sm p-3">
                    {errorMessage}
                </div>
            )}

            <div className="flex items-center justify-between">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="w-4 h-4 text-indigo-600 border-indigo-500/30 rounded focus:ring-indigo-500/30"
                    />
                    <span className="ml-2 text-sm text-gray-600 dark:text-zinc-400">ចងចាំខ្ញុំ</span>
                </label>
                <button
                    type="button"
                    onClick={handleForgotPasswordClick}
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-600 font-medium"
                >
                    ភ្លេចពាក្យសម្ងាត់?
                </button>
            </div>

            <button
                type="submit"
                disabled={!isLoginValid() || isSubmitting}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'កំពុងចូល...' : 'ចូលប្រេីប្រាស់'}
            </button>
        </form>
    );
}
