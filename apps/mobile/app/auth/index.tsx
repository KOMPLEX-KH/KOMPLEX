import { useLayoutEffect, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import * as FileSystem from 'expo-file-system/legacy';
import Constants from 'expo-constants';
import { tw } from '@/utils/styles';
import { auth, googleProvider, microsoftProvider, githubProvider } from '@/configs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithCredential, signInWithRedirect, getAuth, fetchSignInMethodsForEmail, OAuthProvider, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
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
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { HEADER_CONFIG } from '@/constants/header-config';
import { useNavigation } from '@react-navigation/native';

// Complete auth session for proper cleanup
WebBrowser.maybeCompleteAuthSession();

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
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    // Login form state
    const [loginIdentifier, setLoginIdentifier] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // OTP state (signup flow)
    const [isOtpView, setIsOtpView] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [otpEmail, setOtpEmail] = useState('');
    const [otpExpiresIn, setOtpExpiresIn] = useState(90);

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

    const navigation = useNavigation();

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

            await AsyncStorage.setItem("user", JSON.stringify(userData.data));

            router.replace('/');
        } catch (error: unknown) {
            setFormError(getErrorMessage(error, 'login'));
        }
        finally {
            setIsSubmitting(false);
        }
    };

    // Step 1: Send OTP to email, then show OTP view
    const handleSignup = async () => {
        if (!isSignupValid()) return;

        setFormError(null);
        setIsSubmitting(true);

        try {
            const res = await authService.sendSignupOtp(signupData.email);
            setOtpExpiresIn(res.data.expiresIn);
            setOtpEmail(signupData.email);
            setIsOtpView(true);
        } catch (error: unknown) {
            setFormError('មានបញ្ហាក្នុងការចុះឈ្មោះ។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Step 2: Verify OTP then create Firebase account and signup
    const handleVerifyOtp = async () => {
        if (otpCode.length !== 6) return;
        setIsSubmitting(true);
        setFormError(null);

        try {
            const otpResult = await authService.verifySignupOtp({ email: otpEmail, otp: otpCode });

            let imageKey = '';
            if (signupData.profileImage) {
                try {
                    imageKey = await uploadImageFromURI(signupData.profileImage);
                } catch (uploadErr) {
                    setFormError('បញ្ហាក្នុងការបង្ហោះរូបភាព');
                    setIsSubmitting(false);
                    return;
                }
            }

            const firebaseResult = await createUserWithEmailAndPassword(auth, otpEmail, signupData.password);
            const generatedUsername = `${signupData.firstName.toLowerCase().trim()}${signupData.lastName.toLowerCase().trim()}${Date.now()}`.replace(/\s/g, '');

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
            await AsyncStorage.setItem("user", JSON.stringify(userData.data));
            setIsOtpView(false);
            router.replace('/');
        } catch (error: unknown) {
            const status = (error as { response?: { status?: number } })?.response?.status;
            if (status === 429) {
                setFormError('អ្នកព្យាយាមផ្ទៀងផ្ទាត់ OTP លេីសកំណត់។ សូមព្យាយាមម្តងទៀតម្តងទៀតក្រោយ១៥ នា។');
            } else {
                setFormError('ការផ្ទៀងផ្ទាត់ OTP បានបរាជ័យ។ សូមព្យាយាមម្តងទៀត។');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const onResendOtp = async () => {
        setFormError(null);
        try {
            const res = await authService.sendSignupOtp(otpEmail);
            setOtpExpiresIn(res.data.expiresIn);
            setFormError('OTP បានផ្ញើម្តងទៀតទៅអ៊ីមែលរបស់អ្នក។');
        } catch (error: unknown) {
            const status = (error as { response?: { status?: number } })?.response?.status;
            if (status === 429) {
                setFormError('អ្នកបានស្នើសួតថ្មីច្រើនព័កបន្តាច់។ សូមស័កព្វាកៅពេលប្រហែល ១៥ នាតីមុនស័កម្តងទៀត។');
            } else {
                setFormError('បញ្ហាក្នុងការផ្ញើ OTP ម្តងទៀត។ សូមព្យាយាមម្តងទៀត។');
            }
        }
    };

    // Helper function to upload image from URI (React Native)
    const uploadImageFromURI = async (image: { uri: string; type: string; name: string }): Promise<string> => {
        try {
            const { uploadService } = await import('@/services/index');

            // Get upload URL from backend
            const uploadUrlResponse = await uploadService.getUploadUrl(image.name, image.type);
            const { signedUrl, key } = uploadUrlResponse.data;

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
            throw error;
        }
    };

    // Note: For React Native, signInWithRedirect will open a browser
    // The auth state listener in useAuth.tsx will handle the result automatically
    // when the user returns from the browser after authentication

    const handleSocialLogin = async (providerKey: ProviderKey) => {
        setFormError(null);
        setIsSubmitting(true);
        try {
            if (Platform.OS === 'web') {
                // For web, use Firebase's signInWithRedirect
                const provider =
                    providerKey === 'google' ? googleProvider :
                        providerKey === 'github' ? githubProvider :
                            microsoftProvider;
                await signInWithRedirect(auth, provider);
                return;
            }

            // For native, we need to use expo-auth-session to get OAuth tokens
            // Then create Firebase credentials and sign in
            // Manually construct Expo proxy HTTPS redirect URI (required by Google OAuth)
            // The proxy URL format is: https://auth.expo.io/@username/slug
            const expoSlug = Constants.expoConfig?.slug || 'komplex-mobile';

            // Try to use proxy first
            let redirectUri = AuthSession.makeRedirectUri({
                // @ts-expect-error - useProxy exists at runtime but not in types for v7
                useProxy: true,
            });

            // If proxy didn't work (still exp://), manually construct HTTPS proxy URL
            if (redirectUri.startsWith('exp://')) {
                const expoUsername = Constants.expoConfig?.owner || Constants.manifest?.owner?.username || 'ocraksa';
                redirectUri = `https://auth.expo.io/${expoUsername}/${expoSlug}`;
            }

            let discovery: AuthSession.DiscoveryDocument;
            let request: AuthSession.AuthRequest;

            // Configure OAuth based on provider
            if (providerKey === 'google') {
                discovery = {
                    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
                    tokenEndpoint: 'https://oauth2.googleapis.com/token',
                    revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
                };
                const googleClientId = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID || process.env.EXPO_PUBLIC_FIREBASE_GOOGLE_CLIENT_ID || '';
                request = new AuthSession.AuthRequest({
                    clientId: googleClientId,
                    scopes: ['openid', 'profile', 'email'],
                    responseType: AuthSession.ResponseType.Code,
                    redirectUri,
                });
            } else if (providerKey === 'microsoft') {
                discovery = {
                    authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
                    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
                };
                request = new AuthSession.AuthRequest({
                    clientId: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID || '',
                    scopes: ['openid', 'profile', 'email'],
                    responseType: AuthSession.ResponseType.Code,
                    redirectUri,
                });
            } else if (providerKey === 'github') {
                discovery = {
                    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
                    tokenEndpoint: 'https://github.com/login/oauth/access_token',
                };
                request = new AuthSession.AuthRequest({
                    clientId: process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID || '',
                    scopes: ['read:user', 'user:email'],
                    responseType: AuthSession.ResponseType.Code,
                    redirectUri,
                });
            } else {
                throw new Error('Unsupported provider');
            }

            if (!request.clientId) {
                throw new Error(`Missing OAuth client ID for ${providerKey}. Please configure it in your environment variables.`);
            }

            const result = await request.promptAsync(discovery);

            if (result.type !== 'success') {
                setIsSubmitting(false);
                return;
            }

            // Exchange code for token
            const tokenRequestParams = new URLSearchParams();
            tokenRequestParams.append('client_id', request.clientId);
            tokenRequestParams.append('code', result.params.code);
            tokenRequestParams.append('redirect_uri', redirectUri);
            tokenRequestParams.append('grant_type', 'authorization_code');

            if (providerKey === 'google' && process.env.EXPO_PUBLIC_GOOGLE_CLIENT_SECRET) {
                tokenRequestParams.append('client_secret', process.env.EXPO_PUBLIC_GOOGLE_CLIENT_SECRET);
            }
            if (providerKey === 'github' && process.env.EXPO_PUBLIC_GITHUB_CLIENT_SECRET) {
                tokenRequestParams.append('client_secret', process.env.EXPO_PUBLIC_GITHUB_CLIENT_SECRET);
            }

            const tokenResponse = await fetch(discovery.tokenEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json',
                },
                body: tokenRequestParams.toString(),
            });

            const tokenData = await tokenResponse.json();

            if (!tokenData.access_token) {
                throw new Error(`Failed to get access token: ${JSON.stringify(tokenData)}`);
            }

            // Create Firebase credential from OAuth token
            let credential;
            if (providerKey === 'google') {
                credential = GoogleAuthProvider.credential(tokenData.id_token || tokenData.access_token);
            } else if (providerKey === 'microsoft') {
                credential = new OAuthProvider('microsoft.com').credential({
                    idToken: tokenData.id_token || tokenData.access_token,
                    accessToken: tokenData.access_token,
                });
            } else if (providerKey === 'github') {
                credential = GithubAuthProvider.credential(tokenData.access_token);
            } else {
                throw new Error('Unsupported provider');
            }

            // Sign in with Firebase using the credential
            const firebaseResult = await signInWithCredential(auth, credential);
            await firebaseResult.user.getIdToken(true);

            setIsSubmitting(false);
        } catch (error: unknown) {
            setIsSubmitting(false);

            // Handle special case for account exists with different credential
            if (isFirebaseAuthError(error) && error.code === "auth/account-exists-with-different-credential") {
                const email = error.customData?.email;
                try {
                    const methods = await fetchSignInMethodsForEmail(getAuth(), email);
                    setFormError(getErrorMessage(error, 'social', { email: email || '', methods }));
                } catch (fetchError) {
                    setFormError(getErrorMessage(error, 'social'));
                }
            } else {
                const errorMessage = error instanceof Error ? error.message : 'មានបញ្ហាក្នុងការចូលដោយប្រើគណនីសង្គម';
                setFormError(errorMessage);
            }
        }
    };

    const handleProfileImageChange = (image: { uri: string; type: string; name: string } | null) => {
        if (image) {
            setSignupData(prev => ({ ...prev, profileImage: image }));
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'ចូលទៅកាន់គណនី',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

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
                {/* Logo — hidden when forgot password or OTP view */}
                {!isForgotPassword && !isOtpView && (
                    <View style={tw("items-center mb-6")}>
                        <Logo size='lg' />
                    </View>
                )}

                {/* Tab Navigation — hidden when forgot password or OTP view */}
                {!isForgotPassword && !isOtpView && (
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

                {/* Divider */}
                {/* <View style={tw("my-8 flex-row items-center")}>
                    <View style={tw("flex-1 h-px bg-gray-200")} />
                    <Text style={tw("px-4 text-sm text-gray-400")}>ឬ</Text>
                    <View style={tw("flex-1 h-px bg-gray-200")} />
                </View> */}

                {/* Social Login */}
                {/* <View style={tw("flex-row gap-3")}>
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
                </View> */}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}