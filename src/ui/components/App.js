import '../styles/App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import LoginPage from './Pages/LoginPage/LoginPage';
import RootPage from './Pages/RootPage/RootPage';
import QuestionsPage from "./Pages/QuestionsPage/QuestionsPage";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGroupedQuestions } from '../../data/api/repository';
import LeaderboardPage from './Pages/LeaderboardPage/LeaderboardPage';
import SingleQuestionPage from './Pages/SingleQuestionPage/SingleQuestionPage';
import AddQuestionPage from './Pages/AddQuestionPage/AddQuestionPage';
function App() {

  const { user } = useSelector(state => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login")
  }, [])

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
            <Route path="/404" element={<section>404</section>} />
          </RootPage>
          :
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      }
    </div>
  );
}

export default App;
