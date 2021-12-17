import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchQuestions = createAsyncThunk(
    "questions/fetchAll",
    async (currentUser, thunkAPI) => {
        console.log(thunkAPI.getState().auth.user.id);
        const res = await getKeyedQuestions(thunkAPI.getState().auth.user.id);
        return res;
    }
);
