import PageTitle from "../Molecules/PageTitle"
import "./technology.css"
import { useState } from "react"

function Technology({ data } = data) {
  const { technology } = data
  const [techIndex, setTechIndex] = useState(technology[0].name)

  function techBtnHandler(e) {
    setTechIndex(e.target.dataset.tech)
  }

  function technologyBtns() {
    return technology.map((btn) => {
      return (
        <button
          onClick={techBtnHandler}
          data-tech={btn.name}
          className={`techBtn ${techIndex === btn.name && "active"}`}
        >
          {technology.indexOf(btn) + 1}
        </button>
      )
    })
  }

  let selectedTechnology = technology.find((x) => x.name === techIndex)

  return (
    <div className="technology">
      <PageTitle num="03" name="SPACE LAUNCH 101" />
      <div className="techWrapper">
        <aside className="aside">
          <nav className="techNav">{technologyBtns()}</nav>
          <div className="techInfo">
            <h2>The Terminology ...</h2>
            <h1 className="techName">{selectedTechnology.name}</h1>
            <p className="techDescription">{selectedTechnology.description}</p>
          </div>
        </aside>
        <picture>
          <source
            media="(max-width:1000px)"
            srcSet={
              process.env.PUBLIC_URL + selectedTechnology.images.landscape
            }
          />
          <img
            src={process.env.PUBLIC_URL + selectedTechnology.images.portrait}
            alt={selectedTechnology.name}
          />
        </picture>
      </div>
    </div>
  )
}

export default Technology
