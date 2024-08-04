import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { SERVICES_1TITLE, ServicesCardsType } from "../../constant.ts";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import { useState } from "react";
import ServiceModal from "../../components/ServiceModal/ServiceModal.tsx";

const serviceCards: ServicesCardsType[] = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
];

const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    customPaging: () => <div className="services-sliderDots" />,
  };

  const [openCard, setOpenCard] = useState<ServicesCardsType | null>(null);

  return (
    <div className="services" id="uslugi">
      <h2>{SERVICES_1TITLE}</h2>
      <div className="services-wrapper">
        {serviceCards.map((card, index) => (
          <ServiceCard
            key={index}
            variant={card}
            setOpenCard={setOpenCard}
            openCard={openCard}
          />
        ))}
      </div>
      <div className="slider-container">
        {openCard && <ServiceModal variant={openCard} onClose={setOpenCard} />}
        <Slider {...settings}>
          {serviceCards.map((card, index) => (
            <div key={index} className="slider-item">
              <ServiceCard variant={card} setOpenCard={setOpenCard} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
