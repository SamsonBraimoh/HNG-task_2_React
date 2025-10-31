import React from "react";
import '../App.css'
import landingPageImg from '../assets/landingPageImg.png'
import Header from "../compnents/header";
import Footer from "../compnents/footer";


export default function LandingPage(){
    return (
        <>
            <Header />
             <section className='hero'>
                 <h1 className="intro">Effortlessly manage your tickets with TicketFlow, your all-in-one solution for streamlined issue tracking, fast resolution, and team collaboration. Simplify workflows, stay organized, and keep everything flowing.</h1>
                 <img src= {landingPageImg} alt="description" className='landingPageImg'/>
             </section>
             <Footer />
        </>
    )
}