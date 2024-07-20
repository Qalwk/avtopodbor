import PlusCard from "../../components/PlusCard/PlusCard"
import "./Plus.css"
import { PLUS_INFO } from "../../constant"

const Plus = () => {
  return (
    <div className="plus">
      {PLUS_INFO.map((item, index) => (
        <PlusCard key={index} text={item.text} img={item.img} />
      ))}
    </div>
  )
}

export default Plus
