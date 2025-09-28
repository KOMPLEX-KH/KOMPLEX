'use client';

import { Eye, EyeOff, Mail, Lock, Phone, Calendar, Upload } from 'lucide-react';
import { getValidationError, validatePasswordConfirmation } from '@core-utils/validator';

interface SignupFormProps {
    signupData: {
        username: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
        dateOfBirth: string;
        phone: string;
        profileImage: File | null;
    };
    setSignupData: React.Dispatch<React.SetStateAction<{
        username: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
        dateOfBirth: string;
        phone: string;
        profileImage: File | null;
    }>>;
    showPassword: boolean;
    setShowPassword: (show: boolean) => void;
    showConfirmPassword: boolean;
    setShowConfirmPassword: (show: boolean) => void;
    isSignupValid: () => boolean;
    handleSignup: (e: React.FormEvent) => void;
    handleProfileImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isSubmitting?: boolean;
    errorMessage?: string | null;
}

export default function SignUp({
    signupData,
    setSignupData,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isSignupValid,
    handleSignup,
    handleProfileImageChange,
    isSubmitting = false,
    errorMessage = null,
}: SignupFormProps) {
    return (
        <form onSubmit={handleSignup} className="space-y-6 mx-auto">
            {/* Profile Image and Basic Info Row */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <label className="block text-sm font-medium text-black mb-2">
                        រូបផ្ទាល់ខ្លួន
                    </label>
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full border-2 border-indigo-300 bg-gray-100 flex items-center justify-center overflow-hidden">
                            {signupData.profileImage ? (
                                <img
                                    src={URL.createObjectURL(signupData.profileImage)}
                                    alt="Profile preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Upload size={32} className="text-indigo-400" />
                            )}
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfileImageChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-white"
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                {/* Username, First Name, Last Name */}
                <div className="flex-1 space-y-4 w-full">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">
                            ឈ្មោះអ្នកប្រើប្រាស់
                        </label>
                        <input
                            type="text"
                            value={signupData.username}
                            onChange={(e) => setSignupData(prev => ({ ...prev, username: e.target.value }))}
                            className="w-full px-4 py-3 border border-indigo-500/20 rounded-full bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                            placeholder="បញ្ចូលឈ្មោះអ្នកប្រើប្រាស់"
                            disabled={isSubmitting}
                        />
                        {signupData.username && getValidationError('username', signupData.username) && (
                            <p className="text-red-500 text-xs mt-1">{getValidationError('username', signupData.username)}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">
                                ឈ្មោះ
                            </label>
                            <input
                                type="text"
                                value={signupData.firstName}
                                onChange={(e) => setSignupData(prev => ({ ...prev, firstName: e.target.value }))}
                                className="w-full px-4 py-3 border border-indigo-500/20 rounded-full bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                placeholder="ឈ្មោះ"
                                disabled={isSubmitting}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">
                                នាមត្រកូល
                            </label>
                            <input
                                type="text"
                                value={signupData.lastName}
                                onChange={(e) => setSignupData(prev => ({ ...prev, lastName: e.target.value }))}
                                className="w-full px-4 py-3 border border-indigo-500/20 rounded-full bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                placeholder="នាមត្រកូល"
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-black mb-2">
                    អ៊ីមែល
                </label>
                <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                    <input
                        type="email"
                        value={signupData.email}
                        onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-full bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                        placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                        disabled={isSubmitting}
                    />
                </div>
                {signupData.email && getValidationError('email', signupData.email) && (
                    <p className="text-red-500 text-xs mt-1">{getValidationError('email', signupData.email)}</p>
                )}
            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm font-medium text-black mb-2">
                        ពាក្យសម្ងាត់
                    </label>
                    <div className="relative">
                        <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={signupData.password}
                            onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                            className="w-full pl-10 pr-12 py-3 border border-indigo-500/20 rounded-full bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                            placeholder="បង្កើតពាក្យសម្ងាត់"
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
                    {signupData.password && getValidationError('password', signupData.password) && (
                        <p className="text-red-500 text-xs mt-1">{getValidationError('password', signupData.password)}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-black mb-2">
                        បញ្ជាក់ពាក្យសម្ងាត់
                    </label>
                    <div className="relative">
                        <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={signupData.confirmPassword}
                            onChange={(e) => setSignupData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                            className="w-full pl-10 pr-12 py-3 border border-indigo-500/20 rounded-full bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                            placeholder="បញ្ជាក់ពាក្យសម្ងាត់ម្តងទៀត"
                            disabled={isSubmitting}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-gray-600 transition-colors"
                            disabled={isSubmitting}
                        >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {signupData.confirmPassword && validatePasswordConfirmation(signupData.password, signupData.confirmPassword) && (
                        <p className="text-red-500 text-xs mt-1">{validatePasswordConfirmation(signupData.password, signupData.confirmPassword)}</p>
                    )}
                </div>
            </div>

            {/* Date of Birth and Phone */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm font-medium text-black mb-2">
                        ថ្ងៃខែឆ្នាំកំណើត
                    </label>
                    <div className="relative">
                        <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                        <input
                            type="date"
                            value={signupData.dateOfBirth}
                            onChange={(e) => setSignupData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                            className="pl-10 pr-4 py-3 border w-4/5 border-indigo-500/20 rounded-full bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                            disabled={isSubmitting}
                        />
                        {signupData.dateOfBirth && getValidationError('dateOfBirth', signupData.dateOfBirth) && (
                            <p className="text-red-500 text-xs mt-1">{getValidationError('dateOfBirth', signupData.dateOfBirth)}</p>
                        )}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-black mb-2">
                        លេខទូរស័ព្ទ
                    </label>
                    <div className="relative">
                        <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                        <input
                            type="tel"
                            value={signupData.phone}
                            onChange={(e) => setSignupData(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-full bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                            placeholder="លេខទូរស័ព្ទ"
                            disabled={isSubmitting}
                        />
                    </div>
                    {signupData.phone && getValidationError('phone', signupData.phone) && (
                        <p className="text-red-500 text-xs mt-1">{getValidationError('phone', signupData.phone)}</p>
                    )}
                </div>
            </div>

            {errorMessage && (
                <div className="w-full rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm p-3">
                    {errorMessage}
                </div>
            )}

            {/* <div className="flex items-start">
                <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-indigo-500/30 rounded focus:ring-indigo-500/30 mt-1"
                />
                <span className="ml-2 text-sm text-gray-600">
                    ខ្ញុំយល់ស្របជាមួយ <Link href="/terms" className="text-indigo-600 hover:text-indigo-500 font-medium">លក្ខខណ្ឌ</Link> និង <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500 font-medium">គោលការណ៍ភាពឯកជន</Link>
                </span>
            </div> */}

            <button
                type="submit"
                disabled={!isSignupValid() || isSubmitting}
                className={`w-full bg-indigo-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20  disabled:cursor-not-allowed ${isSubmitting ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
                {isSubmitting ? 'កំពុងចុះឈ្មោះ...' : 'ចុះឈ្មោះ'}
            </button>
        </form>
    );
}
