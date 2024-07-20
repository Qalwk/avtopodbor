import "./Risk.css"
import { RISK_TITLE } from "../../constant.ts"
import RiskCard from "../../components/RiskCard/RiskCard.tsx"

const Risk = () => {
  return (
    <div className="risk">
        <h2 style={{width: "850px", textAlign: "left"}}>{RISK_TITLE}</h2>
        <div className="risk-wrapper">
            <RiskCard variant="card1" />
            <RiskCard variant="card2" />
            <RiskCard variant="card3" />
        </div>
    </div>
  )
}

export default Risk
