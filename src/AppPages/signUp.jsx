
import React, { use, useState } from "react";
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Header from "../compnents/header";
import Footer from "../compnents/footer";


export default function SignUp (){

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("")
     const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if(!fullName||!email||!password||!confirmPassword){
            setError("***Please fill in all fields");
            return;
        }
        const emailFormat =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailFormat.test(email)){
            setError("***please, enter a valid email address.");
            return;
        }
        if(password.length < 6){
            setError("***password must be atleast 6 character.")
            return;
        }
        if(password !== confirmPassword){
            setError("***passwords does not match");
            return;
        }
        setError("");
        const newUser = {
            name,
            email,
            password
        };
        localStorage.setItem("user", JSON.stringify(newUser) );
        navigate('/dashboard');
        
    }


    return(
        <>
            <Header />
            <main className="root">
                <main className="formContainer">
                    <h1>Sign Up</h1>
                    <form action="" className="loginForm" onSubmit={submit} noValidate>
                        <label htmlFor="name">Full Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={fullName} 
                            onChange={(e) => setFullName(e.target.value)}    
                        />
                   
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                   
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                   
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button type="submit" className="loginBtn">Sign Up</button>
                    </form>
                    <p style={{color: 'red'}}>{error}</p>
                </main>
            </main>
            <Footer />
        </>
    )
}