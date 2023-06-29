import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import züriengel from '../images/ZüriEngel.jpg'

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
        <h1>Contact</h1>
        </>
    )
}