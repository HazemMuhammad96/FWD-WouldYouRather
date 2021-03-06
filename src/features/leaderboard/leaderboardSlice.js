import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLeaderboard } from "../../data/api/repository";


export const fetchLeaderboard = createAsyncThunk(
    "leaderboard/fetchLeaderboard",
    async () => await getLeaderboard(),  
);

export const leaderboardSlice = createSlice({
    name: "leaderboard",
    initialState: {
        leaderboard: [],
        loading: true,
    },
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchLeaderboard.fulfilled, (state, action) => {
            state.leaderboard = action.payload;
            state.loading = false;
        });
    },
});

export const selectLeaderboard = (state) => state.leaderboard;


export default leaderboardSlice.reducer;