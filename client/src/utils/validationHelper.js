export const validateData = (formData) => {
  const newErrors = {};

  // Name Validation: No numbers or special characters
  const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
  if (!formData.name) {
    newErrors.name = "Name is required";
  } else if (!nameRegex.test(formData.name)) {
    newErrors.name = "Name must not include numbers or special characters";
  }

  // Email Validation
  if (!formData.email) {
    newErrors.email = "Email is required";
  }

  // Password Validation: At least 6 characters, including one special character and one number
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (!passwordRegex.test(formData.password)) {
    newErrors.password =
      "Password must be at least 6 characters long and include one special character and atleast one number";
  }

  // Phone Validation: Must be 9 or 10 digits
  const phoneRegex = /^\d{10}$/;
  if (!formData.phone) {
    newErrors.phone = "Phone number is required";
  } else if (!phoneRegex.test(formData.phone)) {
    newErrors.phone = "Phone number must be 10 digits starting with 0";
  }

  return newErrors;
};
