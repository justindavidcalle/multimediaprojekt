import '../css/trip.css'
import TripData from './TripData'
import gucci from '../images/Gucci.jpg'
import antikerHydrant from '../images/AntikerHydrant.jpg'
import see from '../images/See.jpg'

export default function Trip(){
    return(
        <>
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>

            <div className='tripcard'>
                <TripData 
                    image={gucci}
                    heading="Trip with shopping"
                    text="Shop 'til you drop in Zurich! With its luxury boutiques on Bahnhofstrasse, trendy fashion in the Kreis 5 district, and vibrant markets like the Freitag Tower, this Swiss city is a shopaholic's paradise. Discover Swiss watches, stylish fashion, and local crafts while exploring Zurich's charming streets."
                />

                <TripData 
                    image={antikerHydrant}
                    heading="Trip with shopping"
                    text="Shop 'til you drop in Zurich! With its luxury boutiques on Bahnhofstrasse, trendy fashion in the Kreis 5 district, and vibrant markets like the Freitag Tower, this Swiss city is a shopaholic's paradise. Discover Swiss watches, stylish fashion, and local crafts while exploring Zurich's charming streets."
                />

                <TripData 
                    image={see}
                    heading="Trip with shopping"
                    text="Shop 'til you drop in Zurich! With its luxury boutiques on Bahnhofstrasse, trendy fashion in the Kreis 5 district, and vibrant markets like the Freitag Tower, this Swiss city is a shopaholic's paradise. Discover Swiss watches, stylish fashion, and local crafts while exploring Zurich's charming streets."
                />

            </div>
        </div>
        </>
    )
}