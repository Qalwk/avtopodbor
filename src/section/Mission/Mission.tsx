import "./Mission.css"
import { MISSION_INFO } from "../../constant"

const Mission = () => {
  return (
    <div className="mission" id="about">
      <div className="mission-top">
        <h2>
          {MISSION_INFO.title}
        </h2>
        <div className="mission-wrapper">
          {MISSION_INFO.items.map((item, index) => (
            <h4 className="mission-text" key={index} style={{ color: "white" }}>
              {item}
            </h4>
          ))}
        </div>
      </div>
        <div className="mission-wrapper-line">
          <img className="mission-line" src="./img/mission/line.svg"></img>
        </div>
    </div>
  )
}

export default Mission
