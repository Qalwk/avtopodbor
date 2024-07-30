import "./Guarantee.css";

const guaranteeItems = [
  {
    title: "Юридическая",
    text: "Вы приобретаете автомобиль без кредитных и залоговых обязательств, измененных маркировок, запрета на регистрацию и других ограничений.",
  },
  {
    title: "Техническая",
    text: "Отремонтируем ваш автомобиль. Если неисправность не была выявлена при диагностике автомобиля.",
  },
  {
    title: "100% Возврат денег",
    text: "Если мы не сможем найти для вас требуемый автомобиль в установленные сроки — вернем предоплату в полном объёме.",
  },
];

const Guarantee = () => {
  return (
    <div className="guarantee">
      <h2 className="guarantee-title">Гарантия вашей уверенности</h2>
      <div className="guarantee-wrapper">
        {guaranteeItems.map((item) => (
          <div className="guarantee-item">
            <h3 className="guarantee-item-name">{item.title}</h3>
            <p className="guarantee-item-text">{item.text}</p>
          </div>
        ))}
      </div>
      {/* <div className="guarantee-bg-1" />
      <div className="guarantee-bg-2" />
      <div className="guarantee-bg-3" /> */}
    </div>
  );
};

export default Guarantee;
