// VALIDATION UTILITIES ========================================================

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Username validation
export const isValidUsername = (username: string): boolean => {
  return (
    username.length >= 3 &&
    username.length <= 20 &&
    /^[a-zA-Z0-9_]+$/.test(username)
  );
};

// Password validation
export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

// Phone number validation
export const isValidPhone = (phone: string): boolean => {
  return /^[0-9+\-\s()]+$/.test(phone);
};

// Strong password validation (optional enhanced version)
export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
};

// URL validation
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Date validation
export const isValidDate = (date: string): boolean => {
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj.getTime());
};

// Age validation (must be at least 3 years old)
export const isValidAge = (dateOfBirth: string): boolean => {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1 >= 3;
  }

  return age >= 3;
};

// File validation
export const isValidImageFile = (file: File): boolean => {
  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
  ];
  const maxSize = 5 * 1024 * 1024; // 5MB

  return allowedTypes.includes(file.type) && file.size <= maxSize;
};

export const isValidVideoFile = (file: File): boolean => {
  const allowedTypes = [
    "video/mp4",
    "video/webm",
    "video/ogg",
    "video/avi",
    "video/mov",
  ];
  const maxSize = 100 * 1024 * 1024; // 100MB

  return allowedTypes.includes(file.type) && file.size <= maxSize;
};

// Form validation helpers
export const validateLoginForm = (
  identifier: string,
  password: string
): boolean => {
  return identifier.trim().length > 0 && password.trim().length > 0;
};

export const validateSignupForm = (formData: {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  phone: string;
}): boolean => {
  return (
    formData.username.trim().length > 0 &&
    formData.firstName.trim().length > 0 &&
    formData.lastName.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.password.trim().length > 0 &&
    formData.confirmPassword.trim().length > 0 &&
    isValidUsername(formData.username) &&
    isValidEmail(formData.email) &&
    isValidPassword(formData.password) &&
    formData.password === formData.confirmPassword
  );
};

// Error message generators
export const getValidationError = (field: string, value: string): string => {
  switch (field) {
    case "email":
      return !isValidEmail(value) ? "សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ" : "";
    case "username":
      return !isValidUsername(value)
        ? "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវតែមាន 3-20 តួអក្សរ និងមិនមានអក្សរពិសេស"
        : "";
    case "password":
      return !isValidPassword(value)
        ? "ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងតិច 6 តួអក្សរ"
        : "";
    case "phone":
      return !isValidPhone(value) ? "សូមបញ្ចូលលេខទូរស័ព្ទត្រឹមត្រូវ" : "";
    case "dateOfBirth":
      if (!isValidDate(value)) return "សូមបញ្ចូលថ្ងៃខែឆ្នាំត្រឹមត្រូវ";
      if (!isValidAge(value)) return "អ្នកត្រូវតែមានអាយុយ៉ាងតិច 3 ឆ្នាំ";
      return "";
    default:
      return "";
  }
};

// Password confirmation validation
export const validatePasswordConfirmation = (
  password: string,
  confirmPassword: string
): string => {
  return password !== confirmPassword ? "ពាក្យសម្ងាត់មិនត្រូវគ្នា" : "";
};
