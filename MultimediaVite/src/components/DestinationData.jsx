import '../css/destination.css'
import knie from '../images/Knie.jpg'
import knielogo from '../images/KnieLogo.jpg'
import statue from '../images/Statue.jpg'
import arnold from '../images/ArnoldBürkel.jpg'

export default function DestinationData(props){

    return(
        <>
           <div className={props.className}>
                <div className="des-text">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>

                <div className="image">
                    <img src={props.img1} alt="img" />
                    <img src={props.img2} alt="img" />
                </div>
            </div> 
        </>
    )
}