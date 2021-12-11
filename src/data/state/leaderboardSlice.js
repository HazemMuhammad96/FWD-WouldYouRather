import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLeaderboard } from "../api/repository";


export const fetchLeaderboard = createAsyncThunk(
    "leaderboard/fetchLeaderboard",
    async (thunkAPI) => {
        return await getLeaderboard();
        
    }
);

export const leaderboardSlice = createSlice({
    name: "leaderboard",
    initialState: {
        leaderboard: [],
        loading: true,
    },
    reducers: {
        add: (state, action) => { },
    },
    extraReducers: builder => {
        builder.addCase(fetchLeaderboard.fulfilled, (state, action) => {
            state.leaderboard = action.payload;
            state.loading = false;
        });
    },
});


export const { } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;