import React, { useState } from "react";
import '../App.css'
import Header from "../compnents/header";
import Footer from "../compnents/footer";
import { useNavigate } from 'react-router-dom';


export default function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // form submission

    const submitForm = (e) => {
            e.preventDefault();
            const storedUser = JSON.parse(localStorage.getItem('user'))

            if(storedUser){
                if(storedUser.email === email && storedUser.password === password){
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("currentUser", storedUser.name);
                    navigate('/dashboard');
                }
                else{
                    setError("***Invalid email or username");
                };
            
            };

    };
    

    return(
        <>
            <Header />
           <main className="root">
                 <main className="formContainer">
                    <h1>Login</h1>
                    <form action="" className="loginForm" onSubmit={submitForm}>

                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="e.g, example@gmail.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />

                         <label htmlFor="password">Password</label>
                         <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter password"
                            value={password}
                            onChange ={(e) => setPassword(e.target.value)}
                        />
                
                         <button type="submit" className="loginBtn">Login</button>

                     </form>
                     <p style={{color: 'red'}}>{error}</p>
                     <p>Don't have an account? <a href="">Sign up</a></p>
                 </main>   
            </main> 
            <Footer />
        </>
    )

}