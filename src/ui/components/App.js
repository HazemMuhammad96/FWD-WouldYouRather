import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import LoginPage from './Pages/LoginPage/LoginPage';
import RootPage from './Pages/RootPage/RootPage';
import QuestionsPage from "./Pages/QuestionsPage/QuestionsPage";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import LeaderboardPage from './Pages/LeaderboardPage/LeaderboardPage';
import SingleQuestionPage from './Pages/SingleQuestionPage/SingleQuestionPage';
import AddQuestionPage from './Pages/AddQuestionPage/AddQuestionPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

function App() {

  const { user } = useSelector(state => state.auth);


  useEffect(() => {
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
            <Route path="/*" element={<LoginPage redirectTo />} />
          </Routes>
      }
    </div>
  );
}

export default App;
