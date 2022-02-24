import {useState} from 'react'
import logo from '../../assets/shared/logo.svg'
import './Header.css'

function Header () {

    const [homeIndex, setHomeIndex] = useState(0)
    function homeBtnHandler (e) {
        setHomeIndex(parseInt(e.target.dataset.home))
    }

    return(
        <header className="header">
            <a href="/"><img className="logo" src={logo}/></a>
            <div className="line"></div>
            <div className="filter">
                <nav>
                    { <a onClick={homeBtnHandler} href="/" data-home="0" className={`liPage ${ homeIndex === 0 && 'active'} `}> <span> 00 </span> HOME</a> }
                    <a onClick={homeBtnHandler} href="/destination" data-home="1" className={`liPage ${ homeIndex === 1 && 'active'} `}> <span> 01 </span> DESTINATION</a>
                    <a onClick={homeBtnHandler} href="/crew" data-home="2" className={`liPage ${ homeIndex === 2 && 'active'} `}> <span> 02 </span> CREW</a>
                    <a onClick={homeBtnHandler} href="/technology" data-home="3" className={`liPage ${ homeIndex === 3 && 'active'} `}> <span> 03 </span> TECHNOLOGY</a>
                </nav>
            </div>
        </header>
    )
}

export default Header