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
            title="Service"
            url="/"
            btnClass="hide"
        />
        <Trip />
        <Footer />
        <h1>Sales</h1>
        </>
    )
}