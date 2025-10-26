
import landingPage from './assets/landingPage.png'
import './App.css'
import Button from './compnents/button'



function App() {
  

  return (
    <>
      <article className='clipped-section'>
        <header>
            <h1 className='logo'>TicketFlow.</h1>
            <nav className='nav'>
                <Button label="Login" />
                <Button label="Sign up" />
            </nav>
        </header>
        <section className='hero'>
           <h1>Effortlessly manage your tickets with TicketFlow – your all-in-one solution for streamlined issue tracking, fast resolution, and team collaboration. Simplify workflows, stay organized, and keep everything flowing.</h1>
            <img src= {landingPage} alt="description" className='landingPageImg'/>
        </section>
        <footer className='footer'>
          <h1>TicketFlow.</h1>
          <p className='footerParagraph'>© { new Date().getFullYear() }. TicketFlow. All Rights Reserved</p>
        </footer>
      </article>
    </>
  )
}

export default App
