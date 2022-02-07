import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { _getUsers } from '../api/api';

export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
    async (thunkAPI) => {
        const res = await _getUsers();
        return res;
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: { },
        loading: true,

    },
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = { ...action.payload };
            state.loading = false;
        });
    },
});

export default usersSlice.reducer;
