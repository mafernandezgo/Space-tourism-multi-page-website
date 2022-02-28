import {useState} from 'react'
import logo from '../../assets/shared/logo.svg'
import menuIcon from '../../assets/shared/icon-hamburger.svg'
import './Header.css'
import Nav from '../Molecules/nav'
import closeIcon from '../../assets/shared/icon-close.svg'

function Header () {

    const [menuShow, setMenuShow] = useState(false)

    return(
        <header className="header">
            <a href="/"><img className="logo" src={logo}/></a>
            <div className="line"></div>
            <div className="filter">
                <Nav />
            </div>
            <div>

                <img onClick={() => setMenuShow(!menuShow) } className="menuIcon" src={menuIcon} alt="menuIcon"/>
                { menuShow && 
                <div className="phoneNav">
                    <img onClick={() => {setMenuShow(!menuShow)}} className="closeIcon" src={closeIcon} alt="close Icon"/>
                    {menuShow && <Nav />}
                </div>}
            </div>
        </header>
    )
}

export default Header