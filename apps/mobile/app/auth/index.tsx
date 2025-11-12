import { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import { tw } from '@/utils/styles';
import { auth, googleProvider, microsoftProvider, githubProvider } from '@/configs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';
import { authService } from '@/services/index';
import {
    validateLoginForm,
    validateSignupForm,
} from '@core-utils/validator';
import { getErrorMessage, isFirebaseAuthError } from '@core-utils/firebaseError';
import LogIn from '@/components/screens/auth/LogIn';
import SignUp from '@/components/screens/auth/SignUp';
import Logo from '@/components/common/Logo';
import { Text } from '@/components/common/Text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { Path } from 'react-native-svg';

type ProviderKey = 'google' | 'github' | 'microsoft';

// Social Login Icons
const GoogleIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 24 24">
        <Path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <Path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <Path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <Path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </Svg>
);

const MicrosoftIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 23 23" fill="#00A4EF">
        <Path d="M0 0h11v11H0zm12 0h11v11H12zM0 12h11v11H0zm12 0h11v11H12z" />
    </Svg>
);

const GitHubIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
        <Path fillRule="evenodd" d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.14 8.96 7.49 10.41.55.1.75-.24.75-.52 0-.26-.01-.95-.02-1.87-3.05.66-3.7-1.47-3.7-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.12 1.68 1.12.98 1.67 2.56 1.19 3.19.9.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.17 1.12-2.93-.11-.28-.49-1.41.11-2.94 0 0 .93-.3 3.05 1.12.88-.25 1.82-.38 2.76-.39.94.01 1.88.14 2.76.39 2.12-1.42 3.05-1.12 3.05-1.12.6 1.53.22 2.66.11 2.94.69.76 1.12 1.73 1.12 2.93 0 4.22-2.57 5.14-5.02 5.42.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.2.63.76.52 4.34-1.45 7.48-5.56 7.48-10.41C23.01 5.24 18.27.5 12 .5z" clipRule="evenodd" />
    </Svg>
);

const socialPlatforms: { name: string; provider: ProviderKey; icon: React.ReactNode }[] = [
    {
        name: 'Google',
        provider: 'google',
        icon: <GoogleIcon />
    },
    {
        name: 'Microsoft',
        provider: 'microsoft',
        icon: <MicrosoftIcon />
    },
    {
        name: 'GitHub',
        provider: 'github',
        icon: <GitHubIcon />
    },
];

export default function AuthPage() {
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
        profileImage: null as { uri: string; type: string; name: string } | null
    });

    // Validation functions
    const isLoginValid = () => {
        return validateLoginForm(loginIdentifier, loginPassword);
    };

    const isSignupValid = () => {
        return validateSignupForm(signupData);
    };

    const handleLogin = async () => {
        if (!isLoginValid()) return;

        setFormError(null);
        setIsSubmitting(true);

        try {
            // Use Firebase email/password login regardless of username/email entered
            const result = await signInWithEmailAndPassword(auth, loginIdentifier, loginPassword);
            await result.user.getIdToken(true);
            const userData = await authService.getCurrentUser();

            await AsyncStorage.setItem("user", JSON.stringify(userData));

            router.replace('/');
        } catch (error: unknown) {
            console.error('Login error:', error);
            setFormError(getErrorMessage(error, 'login'));
        }
        finally {
            setIsSubmitting(false);
        }
    };

    const handleSignup = async () => {
        if (!isSignupValid()) return;

        setFormError(null);
        setIsSubmitting(true);

        try {
            let imageKey = '';
            if (signupData.profileImage) {
                try {
                    // For React Native image upload, we'll use a helper function
                    // that converts the image URI to a File-like object for upload
                    imageKey = await uploadImageFromURI(signupData.profileImage);
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

            await AsyncStorage.setItem("user", JSON.stringify(userData));

            // redirect to home page
            router.replace('/');
        } catch (error: unknown) {
            console.error('Signup error:', error);
            setFormError(getErrorMessage(error, 'signup'));
        }
        finally {
            setIsSubmitting(false);
        }
    };

    // Helper function to upload image from URI (React Native)
    const uploadImageFromURI = async (image: { uri: string; type: string; name: string }): Promise<string> => {
        try {
            const { uploadService } = await import('@/services/index');

            // Get upload URL from backend
            const uploadUrlResponse = await uploadService.getUploadUrl(image.name, image.type);
            const { signedUrl, key } = uploadUrlResponse;

            // Read file from URI and upload
            if (Platform.OS === 'web') {
                // For web, fetch the image and create a File object
                const response = await fetch(image.uri);
                const blob = await response.blob();
                const file = new File([blob], image.name, { type: image.type });
                await uploadService.uploadFileToR2(signedUrl, file);
            } else {
                // For React Native, read file using expo-file-system and upload as binary
                // Get file info to verify it exists
                const fileInfo = await FileSystem.getInfoAsync(image.uri);
                if (!fileInfo.exists) {
                    throw new Error('File not found');
                }

                // Read file as base64
                // Note: EncodingType might not be exported, so we use the string directly
                const base64 = await FileSystem.readAsStringAsync(image.uri, {
                    encoding: 'base64' as any,
                });

                // Convert base64 to Uint8Array for binary upload
                // React Native has atob available
                const binaryString = atob(base64);
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }

                // Upload to presigned URL using fetch with binary data
                const uploadResponse = await fetch(signedUrl, {
                    method: 'PUT',
                    body: bytes,
                    headers: {
                        'Content-Type': image.type,
                    },
                });

                if (!uploadResponse.ok) {
                    const errorText = await uploadResponse.text();
                    throw new Error(`Upload failed: ${uploadResponse.statusText} - ${errorText}`);
                }
            }

            return key;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };

    const handleSocialLogin = async (providerKey: ProviderKey) => {
        setFormError(null);
        setIsSubmitting(true);
        try {
            const provider =
                providerKey === 'google' ? googleProvider :
                    providerKey === 'github' ? githubProvider :
                        microsoftProvider;

            // For React Native, we need to use signInWithRedirect or a native solution
            // This is a placeholder - you'll need to implement proper social auth for React Native
            // For web/Expo Web, signInWithRedirect might work
            if (Platform.OS === 'web') {
                await signInWithRedirect(auth, provider);
            } else {
                // For native, you'll need expo-auth-session or react-native-firebase
                setFormError('សូមប្រើប្រាស់កំណែវែបសម្រាប់ការចូលដោយប្រើគណនីសង្គម');
                setIsSubmitting(false);
                return;
            }
        } catch (error: unknown) {
            console.error('Social login error:', error);

            // Handle special case for account exists with different credential
            if (isFirebaseAuthError(error) && error.code === "auth/account-exists-with-different-credential") {
                const email = error.customData?.email;
                try {
                    // Get the existing sign-in methods for this email
                    const methods = await fetchSignInMethodsForEmail(getAuth(), email);
                    setFormError(getErrorMessage(error, 'social', { email: email || '', methods }));
                } catch (fetchError) {
                    console.error('Error fetching sign-in methods:', fetchError);
                    setFormError(getErrorMessage(error, 'social'));
                }
            } else {
                setFormError(getErrorMessage(error, 'social'));
            }
        }
        finally {
            setIsSubmitting(false);
        }
    };

    const handleProfileImageChange = (image: { uri: string; type: string; name: string } | null) => {
        if (image) {
            setSignupData(prev => ({ ...prev, profileImage: image }));
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={tw("flex-1 bg-white")}
        >
            <ScrollView
                contentContainerStyle={tw("flex-grow px-6 py-24 ")}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {/* Logo */}
                <View style={tw("items-center mb-6")}>
                    <Logo size='lg' />
                </View>

                {/* Tab Navigation - Native Style */}
                <View style={tw("flex-row mb-8 bg-gray-100 rounded-full p-1")}>
                    <Pressable
                        onPress={() => setActiveTab('login')}
                        style={tw(`flex-1 py-3 rounded-full ${activeTab === 'login'
                            ? 'bg-white'
                            : ''
                            }`)}
                    >
                        <Text style={tw(`text-base font-semibold text-center ${activeTab === 'login'
                            ? 'text-indigo-600'
                            : 'text-gray-600'
                            }`)}>
                            ចូលទៅកាន់
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => setActiveTab('signup')}
                        style={tw(`flex-1 py-3 rounded-full ${activeTab === 'signup'
                            ? 'bg-white'
                            : ''
                            }`)}
                    >
                        <Text style={tw(`text-base font-semibold text-center ${activeTab === 'signup'
                            ? 'text-indigo-600'
                            : 'text-gray-600'
                            }`)}>
                            ចុះឈ្មោះ
                        </Text>
                    </Pressable>
                </View>

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
                    />
                )}

                {/* Divider */}
                <View style={tw("my-8 flex-row items-center")}>
                    <View style={tw("flex-1 h-px bg-gray-200")} />
                    <Text style={tw("px-4 text-sm text-gray-400")}>ឬ</Text>
                    <View style={tw("flex-1 h-px bg-gray-200")} />
                </View>

                {/* Social Login */}
                <View style={tw("flex-row gap-3")}>
                    {socialPlatforms.map((platform, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleSocialLogin(platform.provider)}
                            disabled={isSubmitting}
                            style={tw(`flex-1 bg-gray-50 py-4 rounded-full items-center justify-center border border-gray-200 ${isSubmitting ? 'opacity-50' : ''}`)}
                        >
                            {platform.icon}
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}