import knie from '../images/Knie.jpg'
import knielogo from '../images/KnieLogo.jpg'
import statue from '../images/Statue.jpg'
import arnold from '../images/ArnoldBürkel.jpg'
import '../css/destination.css'
import DestinationData from './DestinationData'


export default function Destination(){
    
    
    return(
        <>
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        </div>

        <DestinationData 
            className="first-des"
            heading="Taal Volcano, Batangas"
            text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. if you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
            img1={knie}
            img2={knielogo}
        />
        
        
        <DestinationData 
            className="first-des-reverse"
            heading="Historik"
            text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. if you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
            img1={statue}
            img2={arnold}
        />

        </>
    )
}