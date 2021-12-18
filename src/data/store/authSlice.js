import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: undefined,
    },
    reducers: {
        login: (state, action) => {

            state.user = action.payload;

        },
        logout: (state) => {

            state.user = undefined;

        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
