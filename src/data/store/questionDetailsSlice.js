import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getQuestion = createAsyncThunk(
    "questionDetails/get",
    async (questionId, thunkAPI) => {
        
        const res = thunkAPI.getState().questions.questions[questionId];
        return res;
    }
);


export const questionDetailsSlice = createSlice({
    name: 'questionDetails',
    initialState: {
        question: undefined,
        loading: true,
    },
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getQuestion.fulfilled, (state, action) => {
            state.question = action.payload;
            state.loading = false;
        });
        
    },
});




export default questionDetailsSlice.reducer;
