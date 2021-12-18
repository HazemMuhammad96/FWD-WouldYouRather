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

        const currentQuestion = thunkAPI.getState().questions.questions[payload.id];



        if (!currentQuestion["optionOne"].votes.includes(payload.user) &&
            !currentQuestion["optionTwo"].votes.includes(payload.user)) {


            await _saveQuestionAnswer({
                authedUser: payload.user,
                qid: payload.id,
                answer: payload.option
            });

            
            return payload;


        }

    }
);

export const addQuestion = createAsyncThunk(
    "questions/addQuestion",
    async ({ options, onFinish }, thunkAPI) => {
        console.log();

        if (!options.optionOneText || !options.optionTwoText) return;

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
        clear: (state) => { 
            state.questions = {};
            state.loading = true;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.questions = { ...action.payload };
            state.loading = false;
        });
        builder.addCase(updateQuestion.fulfilled, (state, action) => {
            // console.log(!state.questions[action.payload.id][action.payload.option].votes.includes(action.payload.user))
            // if (!state.questions[action.payload.id][action.payload.option].votes.includes(action.payload.user)) {
            
            const currentQuestion = state.questions[action.payload.id];

            if (action.payload) {
                if (!currentQuestion["optionOne"].votes.includes(action.payload.user) &&
                    !currentQuestion["optionTwo"].votes.includes(action.payload.user)) {
                    state.questions[action.payload.id].answered = action.payload.option;
                    state.questions[action.payload.id][action.payload.option].votes.push(action.payload.user);
                }
            }


        });
        builder.addCase(addQuestion.fulfilled, (state, action) => {
            if (action.payload.id)
                state.questions[action.payload.id] = action.payload;
        });
    },
});


export const { clear } = questionsSlice.actions;


export default questionsSlice.reducer;
