import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: localStorage.getItem("user"),
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
			localStorage.setItem("user", action.payload);
		},
		logout: (state, action) => {
			state.user = null;
			localStorage.removeItem("user");
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
