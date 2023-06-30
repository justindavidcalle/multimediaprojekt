import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import opernhaus from '../images/Opernhaus.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

export default function Sales(){

    return(
        <>
        <Navbar/>
        <Hero 
            cName="hero-mid"
            heroImg={opernhaus}
            title="Touren"
            url="/"
            btnClass="hide"
        />
        <Trip />
        <Footer />
        </>
    )
}