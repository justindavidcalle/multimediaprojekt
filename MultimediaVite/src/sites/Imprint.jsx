import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import schwan from '../images/Schwan.jpg'
export default function Imprint(){

    return(
        <>
        <Navbar/>
        <Hero 
            cName="hero-mid"
            heroImg={schwan}
            title="Impressum"
            url="/"
            btnClass="hide"
        />
        </>
    )
}