import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import brunnenZüri from '../images/BrunnenZüri2.jpg'

export default function About(){

    return(
        <>
        <Navbar/>
        <Hero 
            cName="hero-mid"
            heroImg={brunnenZüri}
            title="About"
            url="/"
            btnClass="hide"
        />
        <h1>About</h1>
        </>
    )
}