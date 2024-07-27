import Button from "../Button/Button"
import "./ServiceCard.css"
import { SERVICES_CARDS } from "../../constant.ts"
import { SERVICES_TITLE } from "../../constant.ts"
import { ServicesCardsType } from "../../constant.ts"

interface ServiceCardProps {
  variant: ServicesCardsType;
}

const ServiceCard:React.FC<ServiceCardProps> = ({variant}) => {
  return (
    <div className="serviceCard">
      <div className="serviceCard-wrapper">
        <img src={SERVICES_CARDS[variant].img} />
        <div className="serviceCard-wrapper-text">
          <h3>{SERVICES_TITLE[variant]}</h3>
          <div className="serviceCard-cards">
            {SERVICES_CARDS[variant].description.map((item, index) => (
              <div key={index} className="serviceCard-description">
                <img src="./img/services/Line.svg" />
                <h5>{item}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="serviceCard-wrapper-down">
        <h5 className="btn-text-blue">{SERVICES_CARDS[variant].price}</h5>
        <button className="serviceCard-button">Подробнее</button>
        {/* <Button text={SERVICES_CARDS[variant].button} width="560px" height="72px" radius="25px" /> */}
      </div>
    </div>
  )
}

export default ServiceCard
