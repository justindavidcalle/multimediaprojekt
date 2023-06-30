import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import brunnenZüri from '../images/BrunnenZüri2.jpg'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

export default function About(){

    return(
        <>
        <Navbar/>
        <Hero 
            cName="hero-mid"
            heroImg={brunnenZüri}
            title="Über uns"
            url="/"
            btnClass="hide"
        />
        
        <AboutUs />

        <Footer />

        </>
    )
}