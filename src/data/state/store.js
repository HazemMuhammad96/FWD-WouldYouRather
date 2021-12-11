
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import authReducer from "./authSlice";
import questionsReducer from "./questionsSlice";
import leaderboardReducer from "./leaderboardSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        questions: questionsReducer,
        leaderboard: leaderboardReducer,
    },
});