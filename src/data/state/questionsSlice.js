import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from '../api/api';
import { getGroupedQuestions, getKeyedQuestions } from '../api/repository';

export const fetchQuestions = createAsyncThunk(
    "questions/fetchAll",
    async (currentUser, thunkAPI) => {
        console.log(thunkAPI.getState().auth.user.id);
        const res = await getKeyedQuestions(thunkAPI.getState().auth.user.id);
        return res;
    }
);

export const updateQuestion = createAsyncThunk(
    "questions/updateQuestion",
    async (payload, thunkAPI) => {
        console.log(payload);
        await _saveQuestionAnswer({
            authedUser: payload.user,
            qid: payload.id,
            answer: payload.option
        });

        console.log("done")
        return payload;
    }
);

export const addQuestion = createAsyncThunk(
    "questions/addQuestion",
    async ({ options, onFinish }, thunkAPI) => {
        console.log();
        const res = await _saveQuestion({
            author: thunkAPI.getState().auth.user.id,
            ...options,
        });

        onFinish();

        return { ...res, author: thunkAPI.getState().auth.user };
    }
);


export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: {},
        loading: true,
    },
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.questions = { ...action.payload };
            state.loading = false;
        });
        builder.addCase(updateQuestion.fulfilled, (state, action) => {
            state.questions[action.payload.id].answered = action.payload.answered;
            state.questions[action.payload.id][action.payload.option].votes.push(action.payload.user);

        });
        builder.addCase(addQuestion.fulfilled, (state, action) => {
            state.questions[action.payload.id] = action.payload;
        });
    },
});




export default questionsSlice.reducer;
