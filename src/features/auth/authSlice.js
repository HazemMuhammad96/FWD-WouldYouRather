import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LogUser } from '../../data/api/api';


const AUTH_KEY = 'hompiler.wouldurather-auth';

function saveToLocalStorage(user) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

function removeFromLocalStorage() {
    localStorage.removeItem(AUTH_KEY);
}

export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {

        try {
            const response = await LogUser(user);
            saveToLocalStorage(response);
            return response;

        }
        catch (e) {
            console.log(e);
        }

    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: localStorage.getItem(AUTH_KEY) ? JSON.parse(localStorage.getItem(AUTH_KEY)) : null,
    },
    reducers: {
        logout: (state) => {
            removeFromLocalStorage();
            state.user = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
