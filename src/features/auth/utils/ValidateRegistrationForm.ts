import { RegistrationFormType } from "../constants/FormConstants";

const validateRegistrationForm = (formData: RegistrationFormType): RegistrationFormType => {
	const newErrors: any = {};
	if (!formData.firstName) newErrors.firstName = "First Name is required";
	if (!formData.lastName) newErrors.lastName = "Last Name is required";
	if (!formData.email) {
		newErrors.email = "Email is required";
	} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
		newErrors.email = "Email address is invalid";
	}
	if (!formData.password) {
		newErrors.password = "Password is required";
	} else if (formData.password.length < 6) {
		newErrors.password = "Password must be at least 6 characters";
	}
	if (formData.confirmPassword !== formData.password) {
		newErrors.confirmPassword = "Passwords don't match";
	}
	if (!formData.phoneNumber) {
		newErrors.phoneNumber = "Phone Number is required";
	} else if (!/^\d{10}$/.test(formData.phoneNumber)) {
		newErrors.phoneNumber = "Phone Number is invalid";
	}

	return newErrors;
};

export default validateRegistrationForm;
