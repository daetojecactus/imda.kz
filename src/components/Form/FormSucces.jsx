import React from "react";
import "./FormSuccess.scss";

const FormSucces = ({ successActive, setSuccessActive }) => {
  return (
    <div
      className={successActive ? "success success--open" : "success"}
      onClick={() => setSuccessActive(false)}
    >
      <div className="success__content">
        <div className="success__box">
          <h2 className="success__title">Заявка успешно отправлена</h2>
          <button className="success__close btn-reset"></button>
        </div>
      </div>
    </div>
  );
};

export default FormSucces;
