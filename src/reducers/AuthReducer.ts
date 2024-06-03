import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuthenticated: false,
		userId: null,
	},
	reducers: {
		login: (state, action) => {
			state.userId = action.payload;
			state.isAuthenticated = false;
		},
		logout: (state, action) => {
			state.userId = null;
			state.isAuthenticated = false;
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
