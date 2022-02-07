
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import authReducer from "../../features/auth/authSlice";
import questionsReducer from "../../features/questions/questionsSlice";
import leaderboardReducer from "../../features/leaderboard/leaderboardSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        questions: questionsReducer,
        leaderboard: leaderboardReducer,
    },
});