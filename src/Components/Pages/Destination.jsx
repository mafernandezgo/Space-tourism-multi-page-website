import {useState} from 'react'
import PageTitle from '../Molecules/PageTitle'
import './destination.css'
import moonImg from '../../assets/destination/image-moon.png'
import marsImg from '../../assets/destination/image-mars.png'
import europaImg from '../../assets/destination/image-europa.png'
import titanImg from '../../assets/destination/image-titan.png'

const imgDest = [
        moonImg,
        marsImg,
        europaImg,
        titanImg
    ]


function Destination ({data} = data){
    const {destinations} = data
    const [index, setIndex] = useState(0)
    
    function handleClick (e) {
        setIndex(parseInt(e.target.dataset.dest))
    }

    return (
        <div className="destination">
            <PageTitle num="01" name="Pick your Destination" />


            <section className="destinationInfo">
                <img src={imgDest[index]} alt={destinations[index].name} />
                {/* <img src={moonImg} /> */}
                <aside>
                    <nav className="destinationNav">
                        <button onClick={handleClick} data-dest="0" className={`destinationBtn ${ index === 0 && 'active'}`}>{destinations[0].name}</button>
                        <button onClick={handleClick} data-dest="1" className={`destinationBtn ${ index === 1 && 'active'}`}>{destinations[1].name}</button>
                        <button onClick={handleClick} data-dest="2" className={`destinationBtn ${ index === 2 && 'active'}`}>{destinations[2].name}</button>
                        <button onClick={handleClick} data-dest="3" className={`destinationBtn ${ index === 3 && 'active'}`}>{destinations[3].name}</button>
                    </nav>
                    <h1 className="destinationTitle">{destinations[index].name}</h1>
                    <p className="destinationDescription">{destinations[index].description}</p>
                    <hr></hr>
                    <footer>
                        <div className="destinationDistance">
                            <h2>Avg Distance</h2>
                            <h3>{destinations[index].distance}</h3>
                        </div>
                        <div className="destinationTravel">
                            <h2>est. Travel Time</h2>
                            <h3>{destinations[index].travel}</h3>
                        </div>
                    </footer>
                </aside>
            </section> 

        </div>
    )
}

export default Destination