import {
  SERVICES_CARDS,
  SERVICES_CARDS_MODAL,
  ServicesCardsType,
} from "../../constant";
import "./ServiceModal.css";

interface ServiceModalProps {
  variant: ServicesCardsType;
  onClose: React.Dispatch<React.SetStateAction<ServicesCardsType | null>>;
}

const ServiceModal = ({ variant, onClose }: ServiceModalProps) => {
  return (
    <div className="serviceModal">
      <div className="serviceModal-close" onClick={() => onClose(null)}>
        X
      </div>
      <img className="serviceModal-img" src={SERVICES_CARDS[variant].img} />
      <h3 className="serviceModal-title">
        {SERVICES_CARDS_MODAL[variant].title}
      </h3>
      <ul className="serviceModal-wrapper">
        {SERVICES_CARDS_MODAL[variant].info.map((item) => (
          <li key={item} className="serviceModal-text">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceModal;
