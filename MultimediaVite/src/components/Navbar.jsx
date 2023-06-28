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
            <h1 className="navbar-logo">Trippy</h1>

            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                <Link to="/" className="nav-links"><i class="fa-solid fa-house"></i>Home</Link>
                <CustomLink to="/sales" className="nav-links">Sales</CustomLink>
                <CustomLink to="/about" className="nav-links">About</CustomLink>
                <CustomLink to="/imprint" className="nav-links">Imprint</CustomLink>
                <CustomLink to="/contact" className="nav-links">Contact</CustomLink>
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