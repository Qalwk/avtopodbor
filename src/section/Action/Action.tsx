import ContactForm from "../../components/ClientAction/ClientAction"
import "./Action.css"

const Action = () => {

    const handleSubmit = async (data: { name: string; phone: string }) => {
        // Обработка данных (например, отправка на бэкенд)
        console.log('Отправленные данные:', data);
      };

  return (
    <div className="action">
        <ContactForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Action
