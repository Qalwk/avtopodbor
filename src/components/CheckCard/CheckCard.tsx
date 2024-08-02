import "./CheckCard.css";
import { CHECK_CARDS } from "../../constant.ts";
import { CheckCardsType } from "../../constant.ts";
import IconRect from "../IconRect/IconRect.tsx";

interface CheckCardsProps {
  variant: CheckCardsType;
}

const CheckCard: React.FC<CheckCardsProps> = ({ variant }) => {
  return (
    <div className="checkcard">
      {/* <img className="checkcard-img" src={CHECK_CARDS[variant].icon} /> */}
      <IconRect icon={CHECK_CARDS[variant].icon} />
      <h4>
        <span className="btn-text-blue" style={{ fontSize: "32px" }}>
          {CHECK_CARDS[variant].text}
        </span>
        &nbsp;
        {CHECK_CARDS[variant].description}
      </h4>
    </div>
  );
};

export default CheckCard;
