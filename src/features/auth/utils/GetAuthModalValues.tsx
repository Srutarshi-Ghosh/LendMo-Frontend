import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import { AuthType } from "../constants/AuthConstants";

interface AuthModalValues {
	dialogue: string;
	title: string;
	formElement: JSX.Element | null;
}

const getAuthModalValues = (authType: AuthType, closeModal: Function): AuthModalValues => {
	const modalValues: AuthModalValues = {
		dialogue: "",
		title: "",
		formElement: null,
	};

	switch (authType) {
		case AuthType.Login:
			modalValues.dialogue = "Please enter your email and password to login.";
			modalValues.title = "Login";
			modalValues.formElement = <LoginForm closeModal={closeModal} />;
			break;
		case AuthType.Registration:
			modalValues.dialogue = "Please fill in your details to create an account.";
			modalValues.title = "Register";
			modalValues.formElement = <RegistrationForm closeModal={closeModal} />;
			break;
	}

	return modalValues;
};

export default getAuthModalValues;
