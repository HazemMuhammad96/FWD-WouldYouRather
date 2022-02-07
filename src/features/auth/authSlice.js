import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LogUser } from '../../data/api/api';


function saveToLocalStorage(user) {
    localStorage.setItem('auth', JSON.stringify(user));
}

function removeFromLocalStorage() {
    localStorage.removeItem('auth');
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
        user: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null,
    },
    reducers: {
        logout: (state) => {
            removeFromLocalStorage();
            state.user = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action);
            state.user = action.payload;
        });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
