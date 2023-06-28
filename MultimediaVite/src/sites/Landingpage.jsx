import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import züriWappen from '../images/ZüriWappen.jpg'

export default function Landingpage(){

    return(
        <>
        <Navbar />
        <Hero 
            cName="hero"
            heroImg={züriWappen}
            title="Your Story Your Journey"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
        />
        </>
    )
}