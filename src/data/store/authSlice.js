import { createSlice } from '@reduxjs/toolkit'
import { _getUsers } from '../api/api';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null,
    },
    reducers: {
        login: (state, action) => {

            localStorage.setItem('auth', JSON.stringify(action.payload));
            state.user = action.payload;

        },
        logout: (state) => {

            localStorage.removeItem('auth');
            state.user = undefined;

        },
    },
});



export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
