import { useState } from "react"
import PageTitle from "../Molecules/PageTitle"
import "./crew.css"

function Crew({ data } = data) {
  const { crew } = data
  const [crewIndex, setCrewIndex] = useState(crew[0].name)

  function crewBtnHandler(e) {
    setCrewIndex(e.target.dataset.crew)
  }

  let selectedCrewMember = crew.find((x) => x.name === crewIndex)

  function crewBtns() {
    return crew.map((btn) => {
      return (
        <div
          onClick={crewBtnHandler}
          className={`crewBtn ${
            crewIndex === btn.name ? "active" : "inactive"
          }`}
          data-crew={btn.name}
        ></div>
      )
    })
  }

  return (
    <div className="crew">
      <PageTitle num="02" name="Meet your crew" />
      <div className="crewWrapper">
        <section className="crewInfo">
          <h2 className="crewRole">{selectedCrewMember.role}</h2>
          <h3 className="crewName">{selectedCrewMember.name}</h3>
          <p className="crewBio">{selectedCrewMember.bio}</p>
          <nav className="crewNav">{crewBtns()}</nav>
        </section>
        <img
          className="aside"
          src={process.env.PUBLIC_URL + selectedCrewMember.images.png}
          alt={selectedCrewMember.name}
        />
      </div>
    </div>
  )
}

export default Crew
