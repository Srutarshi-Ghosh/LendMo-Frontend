import { createSlice } from "@reduxjs/toolkit";

const tokenKey = "LendMoToken"

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: localStorage.getItem("user"),
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
			localStorage.setItem("user", action.payload.user);
			localStorage.setItem(tokenKey, action.payload.token)
		},
		logout: (state, action) => {
			state.user = null;
			localStorage.removeItem("user");
			localStorage.removeItem(tokenKey);
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
