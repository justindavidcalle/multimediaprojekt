import '../css/footer.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    


    return(
        <>
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>ZüriGuide</h1>
                    <p>Impressum</p>
                </div>
                <div>
                    <Link to="/"> <i className='fa-brands fa-facebook-square'></i></Link>
                    <Link to="/"> <i className='fa-brands fa-instagram-square'></i></Link>
                    <Link to="/"> <i className='fa-brands fa-twitter-square'></i></Link>

                </div>
            </div>

            <div className='bottom'>
                <div>
                    <h4>Project</h4>
                    <Link to="/">Projekt auf Github</Link>
                    <Link to="/">Author: Justin Calle</Link>
                    <Link to="/">Erstellt: 30.6.2023</Link>
                    <Link to="/">Version: 1.1.0</Link>
                </div>
            </div>
        </div>
        </>
    )
}