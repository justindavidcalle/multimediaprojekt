import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react"
import '../css/navbar.css'

export default function Navbar(){

    const [clicked, setClicked] = useState(false)
    
    const handleClick = () =>{
        setClicked(!clicked)
    }

    return(
        <>
        <nav className="NavbarItems">
            <Link to="/" className="navbar-logo"><h1 >ZüriGuide</h1></Link>
            

            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                <CustomLink to="/sales" className="nav-links"><i class="fa-solid fa-map"></i>Touren</CustomLink>
                <CustomLink to="/about" className="nav-links"><i class="fa-solid fa-circle-info"></i>Über Uns</CustomLink>
                <CustomLink to="/contact" className="nav-links"><i class="fa-solid fa-user"></i>Kontakt</CustomLink>
                <CustomLink to="/galery" className="nav-links">Galerie</CustomLink>
                <button>Sign up</button>
            </ul>
        </nav>
        </>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : "" }>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}