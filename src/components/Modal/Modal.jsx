import React from "react";
import "./Modal.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "popup open" : "popup"}
      onClick={() => setActive(false)}
    >
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <div className="popup__box">
          <h3 className="popup__title">Оставить заявку</h3>
          {children}
        </div>
        <button
          className="popup__close btn-reset"
          onClick={() => setActive(false)}
        ></button>
      </div>
    </div>
  );
};

export default Modal;
