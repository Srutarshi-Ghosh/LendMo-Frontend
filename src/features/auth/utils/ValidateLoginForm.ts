import { LoginFormType } from "../constants/FormConstants";

const validateLoginForm = (formData: LoginFormType): LoginFormType => {
	let newErrors = { email: "", password: "" };

	if (!formData.email) {
		newErrors.email = "Email is required";
	} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
		newErrors.email = "Email is invalid";
	}

	if (!formData.password) {
		newErrors.password = "Password is required";
	}

	return newErrors
};

export default validateLoginForm;
