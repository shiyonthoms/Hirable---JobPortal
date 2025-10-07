import './App.css'
import AuthPage from './pages/AuthPage'
import ProfilePage from './pages/EmployeeProfilePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecruiterPofilePage from './pages/RecruiterPofilePage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />       
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/RecruiterProfile" element={<RecruiterPofilePage />} /> 
      </Routes>
    </Router>
  )
}

export default App
