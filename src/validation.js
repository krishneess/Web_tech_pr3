
export const validateForm = (formData) => {
  const newErrors = {};

  // Validate full name
  if (!/^[A-Za-z ]{3,50}$/.test(formData.fullName.trim())) {
    newErrors.fullName = 'Enter a name using 3–50 letters.';
  }

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    newErrors.email = 'Enter a valid email address.';
  }

  // Validate Indian mobile number
  if (!/^[6-9]\d{9}$/.test(formData.phone)) {
    newErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
  }

  // Validate student ID
  if (!/^[A-Za-z0-9-]{3,20}$/.test(formData.studentId.trim())) {
    newErrors.studentId =
      'Enter a student ID (3–20 letters, digits or hyphens).';
  }

  // Validate course selection
  if (!formData.course) {
    newErrors.course = 'Please select your course.';
  }

  // Validate password
  if (formData.password.length < 8) {
    newErrors.password =
      'Password must contain at least 8 characters.';
  } else if (
    !/[A-Z]/.test(formData.password) ||
    !/[a-z]/.test(formData.password) ||
    !/[0-9]/.test(formData.password)
  ) {
    newErrors.password =
      'Include uppercase, lowercase and numeric characters.';
  }

  // Validate password confirmation
  if (formData.confirmPassword !== formData.password) {
    newErrors.confirmPassword = 'Passwords do not match.';
  }

  // Validate confirmation checkbox
  if (!formData.agree) {
    newErrors.agree =
      'Please confirm that your details are correct.';
  }

  return newErrors;
};
