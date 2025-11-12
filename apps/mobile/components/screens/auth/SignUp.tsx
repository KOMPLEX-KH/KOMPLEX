import { View, TextInput, Pressable, Image, StyleSheet, Alert } from 'react-native';
import { Eye, EyeOff, Mail, Lock, Phone, Upload } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
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
        profileImage: { uri: string; type: string; name: string } | null;
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
        profileImage: { uri: string; type: string; name: string } | null;
    }>>;
    showPassword: boolean;
    setShowPassword: (show: boolean) => void;
    showConfirmPassword: boolean;
    setShowConfirmPassword: (show: boolean) => void;
    isSignupValid: () => boolean;
    handleSignup: () => void;
    handleProfileImageChange: (image: { uri: string; type: string; name: string } | null) => void;
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
    const pickImage = async () => {
        try {
            // Request permission
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert(
                    'Permission Required',
                    'Sorry, we need camera roll permissions to upload your profile image.',
                    [{ text: 'OK' }]
                );
                return;
            }

            // Launch image picker
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.8,
            });

            if (!result.canceled && result.assets[0]) {
                const asset = result.assets[0];
                handleProfileImageChange({
                    uri: asset.uri,
                    type: 'image/jpeg',
                    name: `profile-${Date.now()}.jpg`,
                });
            }
        } catch (error) {
            console.error('Error picking image:', error);
            Alert.alert('Error', 'Failed to pick image. Please try again.');
        }
    };

    return (
        <View style={tw("gap-6")}>
            {/* Profile Image and Basic Info Row */}
            <View style={tw("gap-6")}>
                {/* Profile Image */}
                <View style={tw("items-center")}>
                    <Text style={tw("text-sm font-medium text-gray-700 mb-3")}>
                        រូបផ្ទាល់ខ្លួន
                    </Text>
                    <Pressable onPress={pickImage} disabled={isSubmitting}>
                        <View style={tw("w-28 h-28 rounded-full bg-gray-100 items-center justify-center overflow-hidden border-2 border-gray-200")}>
                            {signupData.profileImage ? (
                                <Image
                                    source={{ uri: signupData.profileImage.uri }}
                                    style={tw("w-full h-full")}
                                    resizeMode="cover"
                                />
                            ) : (
                                <Upload size={28} color="#9ca3af" />
                            )}
                        </View>
                    </Pressable>
                </View>

                {/* Username, First Name, Last Name */}
                <View style={tw("w-full gap-4")}>
                    <View>
                        <Text style={tw("text-sm font-medium text-gray-700 mb-3")}>
                            ឈ្មោះអ្នកប្រើប្រាស់
                        </Text>
                        <TextInput
                            value={signupData.username}
                            onChangeText={(text) => setSignupData(prev => ({ ...prev, username: text }))}
                            style={[tw("w-full px-4 py-4 bg-gray-50 rounded-full"), styles.input]}
                            placeholder="បញ្ចូលឈ្មោះអ្នកប្រើប្រាស់"
                            placeholderTextColor="#9ca3af"
                            editable={!isSubmitting}
                            autoCapitalize="none"
                        />
                        {signupData.username && getValidationError('username', signupData.username) && (
                            <Text style={tw("text-red-500 text-xs mt-2")}>
                                {getValidationError('username', signupData.username)}
                            </Text>
                        )}
                    </View>

                    <View style={tw("flex-row gap-3")}>
                        <View style={tw("flex-1")}>
                            <Text style={tw("text-sm font-medium text-gray-700 mb-3")}>
                                ឈ្មោះ
                            </Text>
                            <TextInput
                                value={signupData.firstName}
                                onChangeText={(text) => setSignupData(prev => ({ ...prev, firstName: text }))}
                                style={[tw("w-full px-4 py-4 bg-gray-50 rounded-full"), styles.input]}
                                placeholder="ឈ្មោះ"
                                placeholderTextColor="#9ca3af"
                                editable={!isSubmitting}
                            />
                        </View>
                        <View style={tw("flex-1")}>
                            <Text style={tw("text-sm font-medium text-gray-700 mb-3")}>
                                នាមត្រកូល
                            </Text>
                            <TextInput
                                value={signupData.lastName}
                                onChangeText={(text) => setSignupData(prev => ({ ...prev, lastName: text }))}
                                style={[tw("w-full px-4 py-4 bg-gray-50 rounded-full"), styles.input]}
                                placeholder="នាមត្រកូល"
                                placeholderTextColor="#9ca3af"
                                editable={!isSubmitting}
                            />
                        </View>
                    </View>
                </View>
            </View>

            {/* Email */}
            <View>
                <Text style={tw("text-sm font-medium text-gray-700 mb-3")}>
                    អ៊ីមែល
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={signupData.email}
                        onChangeText={(text) => setSignupData(prev => ({ ...prev, email: text }))}
                        style={[tw("flex-1 p-4 bg-gray-50 rounded-full"), styles.input]}
                        placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                        placeholderTextColor="#9ca3af"
                        editable={!isSubmitting}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </View>
                {signupData.email && getValidationError('email', signupData.email) && (
                    <Text style={tw("text-red-500 text-xs mt-2")}>
                        {getValidationError('email', signupData.email)}
                    </Text>
                )}
            </View>

            {/* Password and Confirm Password */}
            <View style={tw("flex-1")}>
                <Text style={tw("text-sm font-medium text-gray-700 mb-3")}>
                    ពាក្យសម្ងាត់
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={signupData.password}
                        onChangeText={(text) => setSignupData(prev => ({ ...prev, password: text }))}
                        secureTextEntry={!showPassword}
                        style={[tw("flex-1  p-4 bg-gray-50 rounded-full"), styles.input]}
                        placeholder="បង្កើតពាក្យសម្ងាត់"
                        placeholderTextColor="#9ca3af"
                        editable={!isSubmitting}
                    />
                    <Pressable
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.rightIcon}
                        disabled={isSubmitting}
                    >
                        {showPassword ? <EyeOff size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
                    </Pressable>
                </View>
                {signupData.password && getValidationError('password', signupData.password) && (
                    <Text style={tw("text-red-500 text-xs mt-2")}>
                        {getValidationError('password', signupData.password)}
                    </Text>
                )}
            </View>
            <View style={tw("flex-1")}>
                <Text style={tw("text-sm font-medium text-gray-700 mb-3")}>
                    បញ្ជាក់ពាក្យសម្ងាត់
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={signupData.confirmPassword}
                        onChangeText={(text) => setSignupData(prev => ({ ...prev, confirmPassword: text }))}
                        secureTextEntry={!showConfirmPassword}
                        style={[tw("flex-1  p-4 bg-gray-50 rounded-full"), styles.input]}
                        placeholder="បញ្ជាក់ពាក្យសម្ងាត់ម្តងទៀត"
                        placeholderTextColor="#9ca3af"
                        editable={!isSubmitting}
                    />
                    <Pressable
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={styles.rightIcon}
                        disabled={isSubmitting}
                    >
                        {showConfirmPassword ? <EyeOff size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
                    </Pressable>
                </View>
                {signupData.confirmPassword && validatePasswordConfirmation(signupData.password, signupData.confirmPassword) && (
                    <Text style={tw("text-red-500 text-xs mt-2")}>
                        {validatePasswordConfirmation(signupData.password, signupData.confirmPassword)}
                    </Text>
                )}
            </View>

            {errorMessage && (
                <View style={tw("w-full rounded-full bg-red-50 p-4")}>
                    <Text style={tw("text-red-600 text-sm")}>
                        {errorMessage}
                    </Text>
                </View>
            )}

            <Pressable
                onPress={handleSignup}
                disabled={!isSignupValid() || isSubmitting}
                style={tw(`w-full bg-indigo-600 py-4 rounded-full ${!isSignupValid() || isSubmitting ? 'opacity-50' : ''}`)}
            >
                <Text style={tw("text-white text-center font-semibold text-base")}>
                    {isSubmitting ? 'កំពុងចុះឈ្មោះ...' : 'ចុះឈ្មោះ'}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 16,
        color: '#111827',
    },
    rightIcon: {
        position: 'absolute',
        right: 16,
        zIndex: 1,
    },
});