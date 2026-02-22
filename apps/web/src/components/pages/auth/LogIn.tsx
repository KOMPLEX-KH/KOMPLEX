'use client';

import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import Link from 'next/link';

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
        <form onSubmit={handleLogin} className="space-y-4 mx-auto">
            
            <div>
                <label className="block text-sm font-medium text-black mb-2">
                    អ៊ីមែល
                </label>
                <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                    <input
                        type="text"
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-full bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                        placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                        disabled={isSubmitting}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-black mb-2">
                    ពាក្យសម្ងាត់
                </label>
                <div className="relative">
                    <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-indigo-500/20 rounded-full bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                        placeholder="បញ្ចូលពាក្យសម្ងាត់"
                        disabled={isSubmitting}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-gray-600 transition-colors"
                        disabled={isSubmitting}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
            </div>

            {errorMessage && (
                <div className="w-full rounded-3xl border border-red-200 bg-red-50 text-red-700 text-sm p-3">
                    {errorMessage}
                </div>
            )}

            <div className="flex items-center justify-between">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="w-4 h-4 text-indigo-600 border-indigo-500/30 rounded focus:ring-indigo-500/30"
                    />
                    <span className="ml-2 text-sm text-gray-600">ចងចាំខ្ញុំ</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
                    ភ្លេចពាក្យសម្ងាត់?
                </Link>
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
