import "./PlusCard.css"

interface PlusCardProps {
  text: string;
  img: string;
}

const PlusCard:React.FC<PlusCardProps> = ({text, img}) => {
  return (
    <div className="pluscard">
      <img src={img} alt="img" />
      <h4 style={{width: "230px"}}>{text}</h4>
    </div>
  )
}

export default PlusCard
