import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { SERVICES_1TITLE, ServicesCardsType } from "../../constant.ts";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";

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
  return (
    <div className="services" id="uslugi">
      <h2 className="services-title" style={{ width: "fit-cotnent", textAlign: "left" }}>{SERVICES_1TITLE}</h2>
      <div className="services-wrapper">
        {serviceCards.map((card, index) => (
          <ServiceCard key={index} variant={card} />
        ))}
        {/* <ServiceCard variant="first" />
          <ServiceCard variant="second" />
          <ServiceCard variant="third" />
          <ServiceCard variant="fourth" />
          <ServiceCard variant="fifth" />
          <ServiceCard variant="sixth" /> */}
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} variant={card} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
