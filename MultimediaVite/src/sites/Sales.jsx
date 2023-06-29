import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import opernhaus from '../images/Opernhaus.jpg'

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
        <h1>Sales</h1>
        </>
    )
}