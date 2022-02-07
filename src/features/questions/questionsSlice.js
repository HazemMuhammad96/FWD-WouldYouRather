import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getQuestionById, _saveQuestion, _saveQuestionAnswer, _updateQuestion } from '../../data/api/api';
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
            const res =  await _updateQuestion({id: payload.id, option: payload.option, user: thunkAPI.getState().auth.user});
            console.log(res);
            return res;
        }
        catch (e) {
            console.log("error",e);
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
        list: {
            questions: null,
            loading: true,
        },
        single: {
            question: {},
            loading: true,
        }
    },
    reducers: {
        clear: (state) => {
            state.questions = {};
            state.loading = true;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchSingleQuestion.fulfilled, (state, action) => {
            state.single.question = action.payload;
            state.single.loading = false;
        });
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.list.questions = { ...action.payload };
            state.list.loading = false;
        });
        builder.addCase(updateQuestion.fulfilled, (state, action) => {

            let currentQuestion = state.single.question;

            if (action.payload) {
                if (!currentQuestion["optionOne"].votes.includes(action.payload.user) &&
                    !currentQuestion["optionTwo"].votes.includes(action.payload.user)) {
                    currentQuestion.answered = action.payload.option;
                    currentQuestion[action.payload.option].votes.push(action.payload.user);
                }
            }

            // if (state.list.questions) {
            //     const currentQuestion = state.list.questions[action.payload.id];

            //     if (action.payload) {
            //         if (!currentQuestion["optionOne"].votes.includes(action.payload.user) &&
            //             !currentQuestion["optionTwo"].votes.includes(action.payload.user)) {
            //             state.list.questions[action.payload.id].answered = action.payload.option;
            //             state.list.questions[action.payload.id][action.payload.option].votes.push(action.payload.user);
            //         }
            //     }   
            // }


        });
        builder.addCase(addQuestion.fulfilled, (state, action) => {
            if (action.payload.id)
                state.list.questions[action.payload.id] = action.payload;
        });
    },
});



export const selectList = (state) => state.questions.list;
export const selectSingle = (state) => state.questions.single;


export const { clear } = questionsSlice.actions;


export default questionsSlice.reducer;
