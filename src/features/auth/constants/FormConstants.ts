type RegistrationFormType = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
	phoneNumber: string;
};

type LoginFormType = {
	email: string;
	password: string;
};

export type { LoginFormType, RegistrationFormType };
