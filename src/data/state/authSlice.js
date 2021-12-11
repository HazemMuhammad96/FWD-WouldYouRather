import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { _getUsers } from '../api/api';

export const authSlice = createSlice({
    name: 'auth',
    // initialState: {
    //     user: undefined,
    // },
    initialState: {
        user: {
            "id": "sarahedo",
            "name": "Sarah Edo",
            "avatarURL": "https://cdn-icons-png.flaticon.com/512/194/194938.png",
            "answers": {
                "8xf0y6ziyjabvozdd253nd": "optionOne",
                "6ni6ok3ym7mf1p33lnez": "optionTwo",
                "am8ehyc8byjqgar0jgpub9": "optionTwo",
                "loxhs1bqm25b708cmbf3g": "optionTwo"
            },
            "questions": [
                "8xf0y6ziyjabvozdd253nd",
                "am8ehyc8byjqgar0jgpub9"
            ]
        }
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            console.log(action.payload);
        },
        logout: (state) => {
            state.user = undefined;
        },
    },
});



export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
