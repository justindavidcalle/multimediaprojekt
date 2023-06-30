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
            <h1>Aktuelles</h1>
            <p>Dies erwartet Sie zurzeit in Zürich!</p>
        </div>

        <DestinationData 
            className="first-des"
            heading="Der Knie ist angekommen!"
            text="Erleben Sie das faszinierende Spektakel des Zirkus Knie! Tauchen Sie ein in eine Welt voller Magie, Akrobatik und atemberaubender Tierdarbietungen. Genießen Sie unvergessliche Momente und lassen Sie sich von der Zirkusfamilie Knie verzaubern. Buchen Sie jetzt Ihre Tickets für eine unvergessliche Zirkusshow! Zirkus Knie - Buchen Sie jetzt noch eine Tour und wir planen einen Tag im Zirkus!"
            img1={knie}
            img2={knielogo}
        />
        
        
        <DestinationData 
            className="first-des-reverse"
            heading="Die geheime Historik hinter Zürich"
            text="Entdecken Sie die faszinierende Geschichte von Zürich auf einer unvergesslichen Tour! Begleiten Sie uns auf einem spannenden Streifzug durch die Jahrhunderte und tauchen Sie ein in die Geheimnisse dieser pulsierenden Stadt. Unsere kenntnisreichen Guides werden Sie mit fesselnden Geschichten und interessanten Anekdoten verzaubern. Buchen Sie noch heute Ihre historische Tour und erleben Sie Zürich wie nie zuvor! "
            img1={statue}
            img2={arnold}
        />

        </>
    )
}