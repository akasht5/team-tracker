import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
