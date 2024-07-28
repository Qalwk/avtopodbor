import "./Risk.css"
import { RISK_TITLE } from "../../constant.ts"
import RiskCard from "../../components/RiskCard/RiskCard.tsx"

const Risk = () => {
  return (
    <div className="risk">
        <h2 className="risk-title">{RISK_TITLE}</h2>
        <div className="risk-wrapper">
            <RiskCard variant="card1" />
            <img className="risk-divider" src="/img/risk/divider-1.svg" alt="divider" />
            <RiskCard variant="card2" />
            <img className="risk-divider" src="/img/risk/divider-2.svg" alt="divider" />
            <RiskCard variant="card3" />
        </div>
    </div>
  )
}

export default Risk
