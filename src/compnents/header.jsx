import React from "react";
import '../App.css'
import Button from '../compnents/button'
import { Link } from 'react-router-dom';


export default function Header (){
    return(
        <>
              <header>
                <Link  to="/" style={{textDecoration: 'none', color: 'inherit'}}><h1 className='logo' >TicketFlow.</h1></Link>
                <nav className='nav'>
                  <Link to="/login"><Button label="Login" /></Link>
                  <Link to="/signUp"><Button label="Sign Up" /></Link>
                </nav>
             </header>        
        </>
    )
}