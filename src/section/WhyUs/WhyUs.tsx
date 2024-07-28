import React from "react";
import "./WhyUs.css"

const whyUsItems = ["Скрутка пробега", "Вложения в автомобиль", "Технические проблемы", "Восстановленная безопасность", "Авто после ДТП", "Юридически проблемы"]

const WhyUs = () => {
  return (
    <div className="whyUs">
      <h2 className="whyUs-title">Почему стоит обратиться к нам</h2>
      <h5 className="whyUs-desc">Мы убережем вас от:</h5>
      <div className="whyUs-wrapper">
        {whyUsItems.map(item => <div className="why-item">{item}</div>)}
      </div>
    </div>
  );
};

export default WhyUs;
