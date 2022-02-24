import PageTitle from "../Molecules/PageTitle";
import launchImg from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceImg from '../../assets/technology/image-space-capsule-portrait.jpg'
import spacePortImg from '../../assets/technology/image-spaceport-portrait.jpg'
import './technology.css'
import { useState } from "react";

const imgTech = [
    launchImg,
    spaceImg,
    spacePortImg
]

function Technology ({data}= data){
    const {technology} = data
    const [techIndex, setTechIndex] = useState(0)

    function techBtnHandler (e) {
        setTechIndex(parseInt(e.target.dataset.tech))
    }

    return (
        <div className="technology">
            <PageTitle num="03" name="SPACE LAUNCH 101" />
            <div className="techWrapper">
                <nav className="techNav">
                    <button onClick={techBtnHandler} data-tech="0" className={`techBtn ${ techIndex === 0 && 'active'}`}> 1 </button>
                    <button onClick={techBtnHandler} data-tech="1" className={`techBtn ${ techIndex === 1 && 'active'}`}> 2 </button>
                    <button onClick={techBtnHandler} data-tech="2" className={`techBtn ${ techIndex === 2 && 'active'}`}> 3 </button>
                </nav>
                <div className="techInfo">
                    <h2>The Terminology ...</h2>
                    <h1 className="techName">{technology[techIndex].name}</h1>
                    <p className="techDescription">{technology[techIndex].description}</p>
                </div>
                <img src={imgTech[techIndex]}/>
            </div>
        </div>
    )
}

export default Technology
