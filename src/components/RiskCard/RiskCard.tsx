import "./RiskCard.css"
import { RISK_CARD } from "../../constant.ts"
import { RiskCardsType } from "../../constant.ts"

interface RiskCardsProps {
  variant: RiskCardsType;
}

const RiskCard:React.FC<RiskCardsProps> = ({ variant }) => {
  return (
    <div className="riskcard">
      <img className="riskcard-icon" src={RISK_CARD[variant].icon} />
      <h3 style={{fontSize: "42px", lineHeight: "51px"}} className="btn-text-blue">{RISK_CARD[variant].text}</h3>
      <h4 style={{width: "392px"}}>{RISK_CARD[variant].description}</h4>
    </div>
  )
}

export default RiskCard
