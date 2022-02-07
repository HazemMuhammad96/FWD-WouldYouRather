import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import AuthPage from './features/auth/AuthPage';
import RootPage from './features/root/RootPage';
import QuestionsPage from "./features/questions/list/QuestionsListPage";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import LeaderboardPage from './features/leaderboard/LeaderboardPage';
import SingleQuestionPage from './features/questions/single/SingleQuestionPage';
import AddQuestionPage from './features/questions/new/AddQuestionPage';
import ErrorPage from "./features/common/ErrorPage/ErrorPage";

function App() {

  const { user } = useSelector(state => state.auth);


  useEffect(() => {
    console.log('user', user);
    document.user = user?.id;
  }, [user]);

  return (
    <div className="App">
      {
        user ?
          <RootPage>
            <Route path="/" element={<QuestionsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/questions/:id" element={<SingleQuestionPage />} />
            <Route path="/add" element={<AddQuestionPage />} />
            <Route path="/*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<ErrorPage>Page Not Found. Code: 404</ErrorPage>} />
          </RootPage>
          :
          <Routes>
            <Route path="/*" element={<AuthPage />} />
          </Routes>
      }
    </div>
  );
}

export default App;
