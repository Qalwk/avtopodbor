import ContactForm from "../../components/ClientAction/ClientAction";
import "./Action.css";

const Action = () => {
  const handleSubmit = async (data: { name: string; phone: string }) => {
    // Обработка данных (например, отправка на бэкенд)
    console.log("Отправленные данные:", data);
  };

  return (
    <div className="action">
      <h2 className="action-title">Оставить заявку</h2>
      <div className="action-container">
        <p className="action-text">
          Найдем вам идеальное предложение на рынке, которое полностью
          соответствует вашим требованиям и обладает безупречной юридической и
          технической документацией
        </p>
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Action;
