import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import züriengel from '../images/ZüriEngel.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/Contactform'


export default function Contact(){

    return(
        <>
        <Navbar/>
        <Hero 
            cName="hero-mid"
            heroImg={züriengel}
            title="Contact"
            url="/"
            btnClass="hide"
        />
        <ContactForm />

        
        <Footer />
        </>
    )
}