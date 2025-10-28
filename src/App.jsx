
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './AppPages/landingPage';
import Login from './AppPages/login';
import SignUp from './AppPages/signUp';
import Dashboard from './AppPages/dashboard';




function App() {
  

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<LandingPage />}/>
                <Route path = "/login" element = {<Login />}/>
                <Route path = "/signUp" element = {<SignUp />}/>
                <Route path = "/dashboard" element = {<Dashboard />}/>
            </Routes>
        </BrowserRouter>
     
    </>
  )
}

export default App
