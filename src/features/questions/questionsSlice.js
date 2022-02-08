import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getQuestionById, _saveQuestion, _updateQuestion } from '../../data/api/api';
import { getKeyedQuestions } from '../../data/api/repository';


export const fetchSingleQuestion = createAsyncThunk(
    "questions/fetchSingle",
    async (questionId) => {
        try {
            const res = await getQuestionById(questionId);
            return res;
        }
        catch {
            return null;
        }
    }
);

export const fetchQuestions = createAsyncThunk(
    "questions/fetchAll",
    async (payload, thunkAPI) => {
        const res = await getKeyedQuestions(thunkAPI.getState().auth.user.id);
        return res;

    }
);

export const updateQuestion = createAsyncThunk(
    "questions/updateQuestion",
    async (payload, thunkAPI) => {
        try {
            const res = await _updateQuestion({ id: payload.id, option: payload.option, user: thunkAPI.getState().auth.user });
            return res;
        }
        catch (e) {
            console.log(e);
        }
    }
);

export const addQuestion = createAsyncThunk(
    "questions/addQuestion",
    async ({ options, onFinish }, thunkAPI) => {

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
        list: {
            questions: {},
            loading: true,
        },
        single: {
            question: {},
            loading: true,
        }
    },
    reducers: {
        clear: (state) => {
            state.list.questions = {};
            state.list.loading = true;
        },
        clearSingle: (state) => {
            state.single.question = {};
            state.single.loading = true;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchSingleQuestion.fulfilled, (state, action) => {
            state.single.question = action.payload;
            state.single.loading = false;
        });
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.list.questions = action.payload;
            state.list.loading = false;
        });
        builder.addCase(updateQuestion.fulfilled, (state, action) => {


            if (action.payload) {
                let currentQuestion = state.single.question;
                if (!currentQuestion["optionOne"].votes.includes(action.payload.user) &&
                    !currentQuestion["optionTwo"].votes.includes(action.payload.user)) {
                    currentQuestion.answered = action.payload.option;
                    currentQuestion[action.payload.option].votes.push(action.payload.user);
                }
            }

            if (state.list.questions) {
                let currentQuestion = state.list.questions[action.payload.id];

                if (action.payload) {
                    if (!currentQuestion["optionOne"].votes.includes(action.payload.user) &&
                        !currentQuestion["optionTwo"].votes.includes(action.payload.user)) {
                        currentQuestion.answered = action.payload.option;
                        currentQuestion[action.payload.option].votes.push(action.payload.user);
                    }
                }
            }


        });
        builder.addCase(addQuestion.fulfilled, (state, action) => {
            if (action.payload.id)
                state.list.questions[action.payload.id] = action.payload;
        });
    },
});



export const selectList = (state) => state.questions.list;
export const selectSingle = (state) => state.questions.single;


export const { clear, clearSingle } = questionsSlice.actions;


export default questionsSlice.reducer;
