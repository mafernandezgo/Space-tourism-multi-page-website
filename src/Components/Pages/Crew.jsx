import {useState} from 'react'
import PageTitle from '../Molecules/PageTitle'
import './crew.css'

function Crew ({data} = data){
    const {crew} = data
    const[crewIndex, setCrewIndex] = useState(0)

    function crewBtnHandler (e) {
        setCrewIndex(parseInt(e.target.dataset.crew))

    }

    return (
        <div className="crew">
            <PageTitle num="02" name="Meet your crew" />
            <div className="crewWrapper">
                <section className="crewInfo">
                    <h2 className="crewRole">{crew[crewIndex].role}</h2>
                    <h3 className="crewName">{crew[crewIndex].name}</h3>
                    <p className="crewBio">{crew[crewIndex].bio}</p>
                    <nav className="crewNav">
                        <div onClick={crewBtnHandler} className={`crewBtn ${ crewIndex === 0 && 'active'}`} data-crew="0"></div>
                        <div onClick={crewBtnHandler} className={`crewBtn ${ crewIndex === 1 && 'active'}`} data-crew="1"></div>
                        <div onClick={crewBtnHandler} className={`crewBtn ${ crewIndex === 2 && 'active'}`} data-crew="2"></div>
                        <div onClick={crewBtnHandler} className={`crewBtn ${ crewIndex === 3 && 'active'}`} data-crew="3"></div>
                    </nav>
                </section>
                <img className="aside" src={ process.env.PUBLIC_URL + crew[crewIndex].images.png} alt={crew[crewIndex].name}/>
            </div>
        </div>
    )
}

export default Crew