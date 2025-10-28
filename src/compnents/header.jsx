import React from "react";
import '../App.css'
import Button from '../compnents/button'

export default function Header (){
    return(
        <>
              <header>
                <a href="/" style={{textDecoration: 'none', color: 'inherit'}}><h1 className='logo' >TicketFlow.</h1></a>
                <nav className='nav'>
                    <a href="/login"><Button label="Login" /></a>
                    <a href="/signUp"><Button label="Sign up" /></a>
                </nav>
             </header>        
        </>
    )
}