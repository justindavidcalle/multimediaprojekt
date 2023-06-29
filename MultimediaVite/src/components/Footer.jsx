import '../css/footer.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    


    return(
        <>
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Trippy</h1>
                    <p>Choose your favourite Destination.</p>
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
                    <Link to="/">Changelog</Link>
                    <Link to="/">Status</Link>
                    <Link to="/">License</Link>
                    <Link to="/">All Versions</Link>
                </div>
                <div>
                    <h4>Community</h4>
                    <Link to="/">Changelog</Link>
                    <Link to="/">Status</Link>
                    <Link to="/">License</Link>
                    <Link to="/">All Versions</Link>
                </div>
                <div>
                    <h4>Help</h4>
                    <Link to="/">Changelog</Link>
                    <Link to="/">Status</Link>
                    <Link to="/">License</Link>
                    <Link to="/">All Versions</Link>
                </div>
                <div>
                    <h4>Others</h4>
                    <Link to="/">Changelog</Link>
                    <Link to="/">Status</Link>
                    <Link to="/">License</Link>
                    <Link to="/">All Versions</Link>
                </div>
            </div>
        </div>
        </>
    )
}