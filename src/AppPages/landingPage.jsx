import React from "react";
import '../App.css'
import Button from '../compnents/button'
import landingPageImg from '../assets/landingPageImg.png'



export default function LandingPage(){
    return (
        <>
             <header>
                <h1 className='logo'>TicketFlow.</h1>
                <nav className='nav'>
                    <Button label="Login" />
                    <Button label="Sign up" />
                </nav>
             </header>
             <section className='hero'>
                 <h1>Effortlessly manage your tickets with TicketFlow, your all-in-one solution for streamlined issue tracking, fast resolution, and team collaboration. Simplify workflows, stay organized, and keep everything flowing.</h1>
                 <img src= {landingPageImg} alt="description" className='landingPageImg'/>
             </section>
        </>
    )
}