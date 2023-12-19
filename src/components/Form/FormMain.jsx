import React from "react";
import "./Form.scss";
import { useState } from "react";
import InputMask from "react-input-mask";

const FormMain = ({ setSuccess }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const validateName = () => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/; // Проверка на буквы
    if (!nameRegex.test(name)) {
      setNameError("Неккоректный формат");
    } else {
      setNameError("");
    }
  };

  const validatePhone = () => {
    const phoneRegex = /\+?[0-9\s\-()\s]+/; // Проверка на цифры
    if (!phoneRegex.test(phone)) {
      setPhoneError("Неккоректный формат");
    } else {
      setPhoneError("");
    }
  };

  const validateForm = () => {
    validateName();
    validatePhone();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    if (nameError || phoneError) {
      setFormError("Пожалуйста, исправьте ошибки в форме");
      return;
    }

    // Если нет ошибок валидации, можно отправить форму
    setFormError("");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);

    fetch("https://formspree.io/f/mpzevgva", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Действие при успешной отправке письма
          console.log("Письмо успешно отправлено.");
        } else {
          // Действие при ошибке отправки письма
          console.log("Ошибка при отправке письма.");
        }
      })
      .catch((error) => {
        console.log("Ошибка при отправке письма:", error);
      });

    setSuccess(true);
    setName("");
    setPhone("");
  };

  React.useEffect(() => {
    setIsSubmitDisabled(name.length === 0 || phone.length === 0);
  }, [name, phone]);

  return (
    <form className="form" method="POST" onSubmit={handleSubmit}>
      <div className="form__error">
        {formError && <span className="form__error-descr">{formError}</span>}
      </div>
      <h3 className="form__caption">Имя</h3>
      <label className="form__label">
        <input
          className="form__input"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя*"
          onBlur={validateName}
        />
        <div className="form__error">
          {nameError && <span className="form__error-descr">{nameError}</span>}
        </div>
      </label>
      <h3 className="form__caption">Номер телефона</h3>
      <label className="form__label">
        <InputMask
          className="form__input"
          type="text"
          name="phone"
          value={phone}
          mask="+7 (999) 999-99-99"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Введите номер телефона*"
          onBlur={validatePhone}
        />
        <div className="form__error">
          {phoneError && (
            <span className="form__error-descr">{phoneError}</span>
          )}
        </div>
      </label>
      <button
        className="form__btn btn-reset"
        type="submit"
        disabled={isSubmitDisabled}
      >
        Оставить заявку
      </button>
    </form>
  );
};

export default FormMain;
