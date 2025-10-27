
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './AppPages/landingPage';
import Login from './AppPages/login';
import SignUp from './AppPages/signUp';




function App() {
  

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<LandingPage />}/>
                <Route path = "/login" element = {<Login />}/>
                <Route path = "/signUp" element = {<SignUp />}/>
            </Routes>
        </BrowserRouter>
        <footer className='footer'>
          <h1>TicketFlow.</h1>
          <p className='footerParagraph'> © { new Date().getFullYear() }. TicketFlow. All Rights Reserved. </p>
        </footer>
     
    </>
  )
}

export default App
