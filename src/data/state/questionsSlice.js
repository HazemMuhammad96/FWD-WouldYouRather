import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { _getQuestions, _getUsers,_saveQuestionAnswer } from '../api/api';
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
        console.log(thunkAPI.getState().auth.user.id);
        await _saveQuestionAnswer({
            authedUser: payload.user,
            qid: payload.id,
            answer: payload.option
        });
        return payload;
    }
);

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: {},
        loading: true,
    },
    reducers: {
        add: (state, action) => {
            // console.log({ payload: action })
            // state.users = {
            //     ...state.users,
            //     ...action.payload,
            // }
        },
        // updateQuestion: (state, action) => {
        //     state.questions[action.payload.id].answered = action.payload.answered;
        //     state.questions[action.payload.id][action.payload.option].votes.push(action.payload.user);
        // },
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
    },
});



export const { add } = questionsSlice.actions;

export default questionsSlice.reducer;
