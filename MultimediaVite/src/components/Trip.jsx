import '../css/trip.css'
import TripData from './TripData'
import gucci from '../images/Gucci.jpg'
import antikerHydrant from '../images/AntikerHydrant.jpg'
import see from '../images/See.jpg'

export default function Trip(){
    return(
        <>
        <div className='trip'>
            <h1>Reisevorschläge</h1>
            <p>Hier sind unsere beliebteste und bestbewerteste Reisen!</p>

            <div className='tripcard'>
                <TripData 
                    image={gucci}
                    heading="Shoppingreise"
                    text="Shoppen bis zum Umfallen in Zürich! Mit ihren Luxusboutiquen in der Bahnhofstraße, der trendigen Mode im Kreis 5 und den pulsierenden Märkten wie dem Freitagsturm ist diese Schweizer Stadt ein Paradies für Shopping-Fans. Entdecken Sie Schweizer Uhren, stilvolle Mode und lokales Kunsthandwerk bei einem Streifzug durch die charmanten Straßen von Zürich."
                />

                <TripData 
                    image={antikerHydrant}
                    heading="Geschichtsreise"
                    text="Entdecken Sie Zürichs faszinierende Geschichte auf unserer Geschichtstour! Tauchen Sie ein in vergangene Zeiten, begleitet von unseren Guides. Erleben Sie bedeutende Ereignisse, historische Stätten und die einzigartige Atmosphäre der Stadt. Buchen Sie jetzt Ihre Tour und entdecken Sie Zürichs Geschichte!"
                />

                <TripData 
                    image={see}
                    heading="Wassertour"
                    text="Erleben Sie den Zauber des Zürichsees auf unserer Seetour! Genießen Sie die atemberaubende Schönheit des Sees und entdecken Sie seine malerischen Uferstädte. Unsere erfahrenen Guides begleiten Sie auf einer unvergesslichen Reise entlang des Sees und teilen faszinierende Geschichten über seine Geschichte und Kultur. Buchen Sie jetzt Ihre Tour und lassen Sie sich vom Zürichsee verzaubern!"
                />

            </div>
        </div>
        </>
    )
}