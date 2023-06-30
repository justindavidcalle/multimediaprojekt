import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import fontänen from '../images/Fontänen.jpg'
import ImageBoard from "../components/ImageBoard";

export default function Galery(){
    return(
        <>
        <Navbar/>
        
        <Hero 
            cName="hero-mid"
            heroImg={fontänen}
            title="Galerie"
            url="/"
            btnClass="hide"
        />

        <ImageBoard />

        </>
    )
}