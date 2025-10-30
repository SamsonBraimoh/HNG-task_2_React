
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './AppPages/landingPage';
import Login from './AppPages/login';
import SignUp from './AppPages/signUp';
import Dashboard from './AppPages/dashboard';
import Header from './compnents/header';




function App() {
  

  return (
    <>
            {/* <Header /> */}
            <Routes>
                <Route path = "" element = {<LandingPage />}/>
                <Route path = "login" element = {<Login />}/>
                <Route path = "signUp" element = {<SignUp />}/>
                <Route path = "dashboard" element = {<Dashboard />}/>
            </Routes>
     
    </>
  )
}

export default App
