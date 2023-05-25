import { useState } from "react"
import PageTitle from "../Molecules/PageTitle"
import "./destination.css"

function Destination({ data } = data) {
  const { destinations } = data
  const [index, setIndex] = useState(destinations[0].name)

  function handleClick(e) {
    setIndex(e.target.dataset.dest)
  }

  function destinationBtns() {
    return destinations.map((btn) => {
      return (
        <button
          onClick={handleClick}
          data-dest={btn.name}
          className={`destinationBtn ${index === btn.name && "active"}`}
        >
          {btn?.name}
        </button>
      )
    })
  }

  let selectedDestination = destinations.find((dest) => dest.name === index)

  return (
    <div className="destination">
      <PageTitle num="01" name="Pick your Destination" />

      <section className="destinationInfo">
        <img
          className="destinationImg"
          src={process.env.PUBLIC_URL + selectedDestination.images.png}
          alt={selectedDestination.name}
        />
        <aside>
          <nav className="destinationNav">{destinationBtns()}</nav>
          <h1 className="destinationTitle">{selectedDestination.name}</h1>
          <p className="destinationDescription">
            {selectedDestination.description}
          </p>
          <hr></hr>
          <footer>
            <div className="destinationDistance">
              <h2>Avg Distance</h2>
              <h3>{selectedDestination.distance}</h3>
            </div>
            <div className="destinationTravel">
              <h2>est. Travel Time</h2>
              <h3>{selectedDestination.travel}</h3>
            </div>
          </footer>
        </aside>
      </section>
    </div>
  )
}

export default Destination
