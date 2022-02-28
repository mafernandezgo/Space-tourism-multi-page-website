import {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import './nav.css'
function Nav () {

    const location = useLocation()
    const pathname = location.pathname

    return (
        <nav className="navHeader">
            <Link to="/" className={`liPage ${ pathname === "/" && 'active'} `}> <span> 00 </span> HOME</Link> 
            <Link to="/destination" className={`liPage ${ pathname === "/destination"  && 'active'} `}> <span> 01 </span> DESTINATION</Link>
            <Link to="/crew" className={`liPage ${ pathname === "/crew" && 'active'} `}> <span> 02 </span> CREW</Link>
            <Link to="/technology" className={`liPage ${ pathname === "/technology"  && 'active'} `}> <span> 03 </span> TECHNOLOGY</Link>
        </nav>
    )
}
export default Nav