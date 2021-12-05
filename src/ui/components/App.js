import '../styles/App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Nav/Navbar';
function App() {
  return (
    <div className="App">


      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<h1>aa</h1>} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
