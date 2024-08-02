import SupportCard from "../../components/SupportCard/SupportCard"
import "./Support.css"
import { SUPPORT_INFO } from "../../constant"

const Support = () => {
  return (
    <div className="support">
        <h2>
          {SUPPORT_INFO.title}
        </h2>
        <div className="support-wrapper">
            <div className="support-rect">
              <div className="support-img">
                <img src="./img/support/car.png" />
              </div>
              <div className="support-img-line">
                <img src="./img/support/Line.svg" />
              </div>
            </div>
            <div className="support-wrapper-info">
              {SUPPORT_INFO.items.map((item, index) => (
                <SupportCard key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Support
