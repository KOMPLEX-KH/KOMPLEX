'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth, googleProvider, microsoftProvider, githubProvider } from '@/configs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { authService } from '@/services/index';
import {
    validateLoginForm,
    validateSignupForm,
} from '@core-utils/validator';
import LogIn from '@/components/pages/auth/LogIn';
import SignUp from '@/components/pages/auth/SignUp';
import { Logo } from '@/components/common/Logo';

export default function AuthPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    // Login form state
    const [loginIdentifier, setLoginIdentifier] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // otp state
    const [isOtpView, setIsOtpView] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [otpEmail, setOtpEmail] = useState('');
    const [otpExpiresIn, setOtpExpiresIn] = useState(90);



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

    // Validation functions
    const isLoginValid = () => {
        return validateLoginForm(loginIdentifier, loginPassword);
    };

    const isSignupValid = () => {
        return validateSignupForm(signupData);
    };

    // used to login user
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoginValid()) return;

        setFormError(null);
        setIsSubmitting(true);

        try {
            const result = await signInWithEmailAndPassword(auth, loginIdentifier, loginPassword);
            await result.user.getIdToken(true);
            const userData = await authService.getCurrentUser();

            localStorage.setItem("user", JSON.stringify(userData.data));

            router.push('/');
        } catch (error: unknown) {
            setFormError('អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsSubmitting(false);
        }
    };

    // handle signup with otp
    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isSignupValid()) return;

        setFormError(null);
        setIsSubmitting(true);

        try {
            // send otp to email for verify email user ownership
            const res = await authService.sendSignupOtp(signupData.email);
            setOtpExpiresIn(res.data.expiresIn);
            setOtpEmail(signupData.email);
            setIsOtpView(true);
        } catch (error: unknown) {
            console.error('Signup error:', error);
            setFormError('មានបញ្ហាក្នុងការចុះឈ្មោះ។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsSubmitting(false);
        }
    };

    // handle to verify otp for signup user
    const handleVerifyOtp = async () => {
        if (otpCode.length !== 6) return;
        setIsSubmitting(true);
        setFormError(null);

        try {
            // still note complte overall, since creating but this is the safest order without implementing rollback
            // usecase: at the very least user can log in, but if sigbup here fails in the future the getCurretnUser might fail
            // Verify OTP with backend
            const otpResult = await authService.verifySignupOtp({ email: otpEmail, otp: otpCode });

            // Create Firebase account after verification
            // Upload profile image if exists and get the key
            let imageKey = '';
            if (signupData.profileImage) {
                try {
                    imageKey = await authService.uploadInitialProfile(signupData.profileImage);
                } catch (uploadErr) {
                    setFormError('បញ្ហាក្នុងការបង្ហោះរូបភាព');
                    return;
                }
            }

            const firebaseResult = await createUserWithEmailAndPassword(auth, otpEmail, signupData.password);

            // Generate username from firstName and lastName
            const generatedUsername = `${signupData.firstName.toLowerCase().trim()}${signupData.lastName.toLowerCase().trim()}${Date.now()}`.replace(/\s/g, '');

            // final result for user to signup
            const finalPayload = {
                email: signupData.email,
                username: generatedUsername,
                uid: firebaseResult.user.uid,
                firstName: signupData.firstName,
                lastName: signupData.lastName,
                dateOfBirth: signupData.dateOfBirth || '',
                phone: signupData.phone || '',
                profileImageKey: imageKey,
                verificationToken: otpResult.data.verificationToken,
            };

            const userData = await authService.signup(finalPayload);
            localStorage.setItem("user", JSON.stringify(userData.data));
            setIsOtpView(false);
            router.push('/');
        } catch (error: unknown) {
            console.error('OTP verification error:', error);
            const status = (error as any)?.response?.status;
            if (status === 429) {
                setFormError('អ្នកព្យាយាមផ្ទៀងផ្ទាត់ OTP លេីសកំណត់។ សូមព្យាយាមម្តងទៀតម្តងទៀតក្រោយ១៥ នា។');
            } else {
                setFormError('ការផ្ទៀងផ្ទាត់ OTP បានបរាជ័យ។ សូមព្យាយាមម្តងទៀត។');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSocialLogin = async (providerKey: 'google' | 'github' | 'microsoft') => {
        setFormError(null);
        setIsSubmitting(true);
        try {
            const provider =
                providerKey === 'google' ? googleProvider :
                    providerKey === 'github' ? githubProvider :
                        microsoftProvider;
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

            localStorage.setItem("user", JSON.stringify(userData.data));
            router.push('/');
        } catch (error: unknown) {
            console.error('Social login error:', error);
            setFormError('មានបញ្ហាក្នុងការចូលដោយប្រើគណនីសង្គម។ សូមព្យាយាមម្តងទៀត។');
        }
        finally {
            setIsSubmitting(false);
        }
    };

    const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSignupData(prev => ({ ...prev, profileImage: file }));
        }
    };

    // handle resend otp
    const onResendOtp = async () => {
        setFormError(null);
        try {
            const res = await authService.sendSignupOtp(otpEmail);
            setOtpExpiresIn(res.data.expiresIn);
            setFormError('OTP បានផ្ញើម្តងទៀតទៅអ៊ីមែលរបស់អ្នក។');
        } catch (error: unknown) {
            console.error('Resend OTP error:', error);
            const status = (error as any)?.response?.status;
            if (status === 429) {
                setFormError('អ្នកបានស្នើសួតថ្មីច្រើនព័កបន្តាច់។ សូមស័កព្វាកៅពេលប្រហែល ១៥ នាតីមុនស័កម្តងទៀត។');
            } else {
                setFormError('បញ្ហាក្នុងការផ្ញើ OTP ម្តងទៀត។ សូមព្យាយាមម្តងទៀត។');
            }
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl relative z-10 pt-16">
                {/* Auth Container */}
                <div className="bg-indigo-500/10 backdrop-blur-sm border border-indigo-600 rounded-3xl shadow-xl shadow-indigo-500/10 p-6">
                    <>
                        {/* Logo and Slogan */}
                        {!isForgotPassword && !isOtpView && (
                            <div className="text-center mb-8">
                                <Link href="/" className="flex items-center justify-center gap-2 mb-4">
                                    <Logo size='lg' showBeta={false} />
                                </Link>
                            </div>
                        )}


                        {/* Tab Navigation */}
                        {!isForgotPassword && !isOtpView && (
                            <div className="flex bg-white rounded-full p-1 mb-6 border border-indigo-600  mx-auto">
                                <button
                                    onClick={() => setActiveTab('login')}
                                    className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-all hover:bg-gray-50 duration-300 ${activeTab === 'login'
                                        ? 'bg-white text-indigo-600 shadow-sm border border-indigo-600'
                                        : 'text-black hover:text-indigo-600'
                                        }`}
                                >
                                    ចូលប្រេីប្រាស់
                                </button>
                                <button
                                    onClick={() => setActiveTab('signup')}
                                    className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-all hover:bg-gray-50 duration-300 ${activeTab === 'signup'
                                        ? 'bg-white text-indigo-600 shadow-sm border border-indigo-600'
                                        : 'text-black hover:text-indigo-600'
                                        }`}
                                >
                                    ចុះឈ្មោះ
                                </button>
                            </div>
                        )}

                        {/* Login Form */}
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
                                onForgotPasswordChange={setIsForgotPassword}
                            />
                        )}

                        {/* Signup Form */}
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
                                showOtpView={isOtpView}
                                otpCode={otpCode}
                                setOtpCode={setOtpCode}
                                otpEmail={otpEmail}
                                onVerifyOtp={handleVerifyOtp}
                                onResendOtp={onResendOtp}
                                otpExpiresIn={otpExpiresIn}
                                onOtpViewChange={() => setIsOtpView(false)}
                            />
                        )}

                        {/* Divider + Social Login — hidden when forgot password or OTP view is active */}
                        {!isForgotPassword && !isOtpView && (<>
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
                                        onClick={() => handleSocialLogin(platform.provider as 'google' | 'github' | 'microsoft')}
                                        className="flex-1 bg-white border border-indigo-500/20 text-gray-700 py-3 px-4 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isSubmitting}
                                    >
                                        {platform.icon}
                                    </button>
                                ))}
                            </div>
                        </>)}
                    </>
                </div>
            </div>
        </div>
    );
}

// SOCIAL PLATFORMS ============================================================================================================================

const socialPlatforms = [
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
