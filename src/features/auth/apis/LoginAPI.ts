import { API_URL, LOGIN_ROUTE } from "../constants/APIConstants";

const loginAPI = async (email: string, password: string) => {
	const loginURL = `${API_URL}/${LOGIN_ROUTE}`;
	const response = await fetch(loginURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || "Login failed");
	}

	const data = await response.json();
	return data;
};

export default loginAPI;
