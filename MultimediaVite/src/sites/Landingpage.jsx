import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import züriWappen from '../images/ZüriWappen.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

export default function Landingpage(){

    return(
        <>
        <Navbar />
        <Hero 
            cName="hero"
            heroImg={züriWappen}
            title="Zürich lebt!"
            text="Erleben Sie das Beste mit uns!"
            buttonText="Reise teilnehmen"
            url="/sales"
            btnClass="show"
        />

        <Destination />

        <Trip />

        <Footer />
        </>
    )
}