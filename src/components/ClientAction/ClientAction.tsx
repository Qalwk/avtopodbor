import axios from "axios"; // Импортируем axios
import { useState } from "react";

import "./ClientAction.css";

interface ContactFormProps {
  onSubmit: (data: { client_name: string; client_phone: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [client_name, setName] = useState("");
  const [client_phone, setPhone] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Проверка, введены ли все данные
    if (!client_name || !client_phone) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    try {
      // Отправка данных на сервер с помощью axios
      const response = await axios.post("/api/contact-with-us/", {
        client_name,
        client_phone,
      });

      if (response.status === 200) {
        alert("Контакты успешно отправлены!");
        setName("");
        setPhone("");
      } else {
        alert("Ошибка отправки контактов!");
      }
    } catch (error) {
      console.error("Ошибка отправки контактов:", error);
      alert("Ошибка отправки контактов!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-name"
        placeholder="Ваше имя"
        type="text"
        id="name"
        value={client_name}
        onChange={handleNameChange}
      />
      <div className="bottom-wrapper">
        <input
          className="input-tel"
          type="tel"
          id="phone"
          value={client_phone}
          onChange={handlePhoneChange}
          placeholder="Введите номер телефона"
          // onClick={(event) => {
          //   const target = event.target as HTMLInputElement;
          // }}
        />
        <button type="submit" className="form-submit">
          Связаться
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
