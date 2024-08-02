import "./Check.css"
import { CHECK_TITLE } from "../../constant.ts"
import CheckCard from "../../components/CheckCard/CheckCard.tsx"

const Check = () => {
  return (
    <div className="check">
        <h2>
            {CHECK_TITLE}
        </h2>
        <div className="check-cards">
            <CheckCard variant="card1" />
            <CheckCard variant="card5" />
            <CheckCard variant="card2" />
            <CheckCard variant="card6" />
            <CheckCard variant="card3" />
            <CheckCard variant="card7" />
            <CheckCard variant="card4" />
            <CheckCard variant="card8" />
        </div>
    </div>
  )
}

export default Check
