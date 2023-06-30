import { Link } from 'react-router-dom'
import '../css/hero.css'
import züriWappen from '../images/ZüriWappen.jpg'

export default function Hero(props){
    

    return(
        <>
        <div className={props.cName}>
            <img src={props.heroImg} alt="HeroImg" />

            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link to={props.url} className={props.btnClass}>{props.buttonText}</Link>
            </div>
        </div>
        </>
    )
}