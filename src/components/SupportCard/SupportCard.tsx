import IconRect from "../IconRect/IconRect"
import "./SupportCard.css"

interface SupportCardProps {
  text: string;
  icon: string;
}

const SupportCard:React.FC<SupportCardProps> = ({text, icon}) => {
  return (
    <div className="SupportCard" style={{width: "552px", textAlign: "left"}}>
        <IconRect icon={icon} />
        <h3>{text}</h3>
    </div>
  )
}

export default SupportCard
