import React from "react";

export default function Footer (){
    return(
        <>
        <footer className='footer'>
          <h1>TicketFlow.</h1>
          <p className='footerParagraph'> © { new Date().getFullYear() }. TicketFlow. All Rights Reserved. </p>
        </footer>
        </>
    )
}