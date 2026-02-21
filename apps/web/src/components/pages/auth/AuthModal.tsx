'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth, googleProvider, microsoftProvider, githubProvider } from '@/configs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { authService, uploadService } from '@/services/index';
import {
    validateLoginForm,
    validateSignupForm,
} from '@core-utils/validator';
import LogIn from '@/components/pages/auth/LogIn';
import SignUp from '@/components/pages/auth/SignUp';
import Header from '@/components/common/Header';

type ProviderKey = 'google' | 'github' | 'microsoft';

interface AuthModalProps {
    open: boolean;
    onClose: () => void;
}

const socialPlatforms: Array<{ name: string; provider: ProviderKey; icon: React.ReactNode }> = [
    {
        name: 'Google',
        provider: 'google',
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
        )
    },
    {
        name: 'Microsoft',
        provider: 'microsoft',
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 23 23" fill="#00A4EF">
                <path d="M0 0h11v11H0zm12 0h11v11H12zM0 12h11v11H0zm12 0h11v11H12z" />
            </svg>
        )
    },
    {
        name: 'GitHub',
        provider: 'github',
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.14 8.96 7.49 10.41.55.1.75-.24.75-.52 0-.26-.01-.95-.02-1.87-3.05.66-3.7-1.47-3.7-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.12 1.68 1.12.98 1.67 2.56 1.19 3.19.9.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.17 1.12-2.93-.11-.28-.49-1.41.11-2.94 0 0 .93-.3 3.05 1.12.88-.25 1.82-.38 2.76-.39.94.01 1.88.14 2.76.39 2.12-1.42 3.05-1.12 3.05-1.12.6 1.53.22 2.66.11 2.94.69.76 1.12 1.73 1.12 2.93 0 4.22-2.57 5.14-5.02 5.42.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.2.63.76.52 4.34-1.45 7.48-5.56 7.48-10.41C23.01 5.24 18.27.5 12 .5z" clipRule="evenodd" />
            </svg>
        )
    },
];

export default function AuthModal({ open, onClose }: AuthModalProps) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    // Login form state
    const [loginIdentifier, setLoginIdentifier] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Signup form state
    const [signupData, setSignupData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        phone: '',
        profileImage: null as File | null
    });

    const isLoginValid = () => validateLoginForm(loginIdentifier, loginPassword);
    const isSignupValid = () => validateSignupForm(signupData);

    const closeAndReset = () => {
        setIsSubmitting(false);
        setFormError(null);
        onClose();
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoginValid()) return;

        setFormError(null);
        setIsSubmitting(true);

        try {
            const result = await signInWithEmailAndPassword(auth, loginIdentifier, loginPassword);
            await result.user.getIdToken(true);
            const userData = await authService.getCurrentUser();
            localStorage.setItem('user', JSON.stringify(userData.data));
            closeAndReset();
            router.push('/');
        } catch (error: unknown) {
            console.error('Login error:', error);
            const message = error instanceof Error ? error.message : 'មានបញ្ហាក្នុងការចូល';
            setFormError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isSignupValid()) return;

        setFormError(null);
        setIsSubmitting(true);

        try {
            let imageKey = '';
            if (signupData.profileImage) {
                try {
                    imageKey = await uploadService.uploadFile(signupData.profileImage);
                } catch (uploadErr) {
                    console.error('Upload error:', uploadErr);
                    setFormError('បញ្ហាក្នុងការបង្ហោះរូបភាព');
                    setIsSubmitting(false);
                    return;
                }
            }

            const result = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
            const userData = await authService.signup({
                email: signupData.email,
                username: signupData.username,
                uid: result.user.uid,
                firstName: signupData.firstName,
                lastName: signupData.lastName,
                dateOfBirth: signupData.dateOfBirth,
                phone: signupData.phone,
                profileImageKey: imageKey,
            });

            localStorage.setItem('user', JSON.stringify(userData.data));
            closeAndReset();
            router.push('/');
        } catch (error: unknown) {
            console.error('Signup error:', error);
            const message = error instanceof Error ? error.message : 'មានបញ្ហាក្នុងការចុះឈ្មោះ';
            setFormError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSocialLogin = async (providerKey: ProviderKey) => {
        setFormError(null);
        setIsSubmitting(true);
        try {
            const provider = providerKey === 'google' ? googleProvider : providerKey === 'github' ? githubProvider : microsoftProvider;
            const result = await signInWithPopup(auth, provider);
            const userData = await authService.socialLogin({
                provider: providerKey,
                email: result.user.email || '',
                username: result.user.displayName || '',
                uid: result.user.uid,
                firstName: result.user.displayName?.split(' ')[0] || '',
                lastName: result.user.displayName?.split(' ').slice(1).join(' ') || '',
                dateOfBirth: null,
                phone: '',
                profileImage: result.user.photoURL,
                profileImageKey: null,
            });

            localStorage.setItem('user', JSON.stringify(userData.data));
            closeAndReset();
            router.push('/');
        } catch (error: unknown) {
            console.error('Social login error:', error);
            const message = error instanceof Error ? error.message : 'មានបញ្ហាក្នុងការចូលដោយប្រើគណនីសង្គម';
            setFormError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSignupData(prev => ({ ...prev, profileImage: file }));
        }
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => { onClose() }}>
                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-[6px]" />
                </Transition.Child>
                <Header></Header>

                {/* Centered panel */}
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center py-20">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 translate-y-2 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-2 sm:scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-3xl border border-indigo-600 bg-white backdrop-blur-xl p-6 shadow-xl shadow-indigo-500/10">
                                <div className="flex items-start justify-between">
                                    <Dialog.Title className="sr-only">Authentication</Dialog.Title>
                                    <Link href="/" className="flex items-center justify-center gap-2 mb-4">
                                        <img src="/logo.png" alt="" className='w-8 h-8' />
                                        <div>
                                            <span className="text-2xl font-extrabold tracking-tight text-indigo-600">KOM</span>
                                            <span className="text-2xl font-extrabold tracking-tight text-black">PLEX</span>
                                        </div>
                                    </Link>
                                </div>

                                {/* Tabs */}
                                <div className="flex bg-white rounded-3xl p-1 mb-6 border border-indigo-600  mx-auto">
                                    <button
                                        onClick={() => setActiveTab('login')}
                                        className={`flex-1 py-3 px-4 rounded-3xl text-sm font-medium transition-all hover:bg-gray-50 duration-300 ${activeTab === 'login'
                                            ? 'bg-white text-indigo-600 shadow-sm border border-indigo-600'
                                            : 'text-black hover:text-indigo-600'
                                            }`}
                                    >
                                        ចូលទៅកាន់
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('signup')}
                                        className={`flex-1 py-3 px-4 rounded-3xl text-sm font-medium transition-all hover:bg-gray-50 duration-300 ${activeTab === 'signup'
                                            ? 'bg-white text-indigo-600 shadow-sm border border-indigo-600'
                                            : 'text-black hover:text-indigo-600'
                                            }`}
                                    >
                                        ចុះឈ្មោះ
                                    </button>
                                </div>

                                {/* Forms */}
                                {activeTab === 'login' && (
                                    <LogIn
                                        loginIdentifier={loginIdentifier}
                                        setLoginIdentifier={setLoginIdentifier}
                                        loginPassword={loginPassword}
                                        setLoginPassword={setLoginPassword}
                                        showPassword={showPassword}
                                        setShowPassword={setShowPassword}
                                        isLoginValid={isLoginValid}
                                        handleLogin={handleLogin}
                                        isSubmitting={isSubmitting}
                                        errorMessage={formError}
                                    />
                                )}

                                {activeTab === 'signup' && (
                                    <SignUp
                                        signupData={signupData}
                                        setSignupData={setSignupData}
                                        showPassword={showPassword}
                                        setShowPassword={setShowPassword}
                                        showConfirmPassword={showConfirmPassword}
                                        setShowConfirmPassword={setShowConfirmPassword}
                                        isSignupValid={isSignupValid}
                                        handleSignup={handleSignup}
                                        handleProfileImageChange={handleProfileImageChange}
                                        isSubmitting={isSubmitting}
                                        errorMessage={formError}
                                    />
                                )}

                                {/* Divider */}
                                <div className="my-6 flex items-center  mx-auto">
                                    <div className="flex-1 border-t border-indigo-500/20"></div>
                                    <span className="px-4 text-sm text-gray-500">ឬ</span>
                                    <div className="flex-1 border-t border-indigo-500/20"></div>
                                </div>

                                {/* Social Login */}
                                <div className="flex gap-2 mx-auto">
                                    {socialPlatforms.map((platform, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSocialLogin(platform.provider)}
                                            className="flex-1 bg-white border border-indigo-500/20 text-gray-700 py-3 px-4 rounded-3xl font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={isSubmitting}
                                        >
                                            {platform.icon}
                                        </button>
                                    ))}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

