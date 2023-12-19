import React from "react";
import logoImage from "../../img/logo.svg";
import logoImageDark from "../../img/logo-light.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__return">
          <span className="header__return-icon"></span>
          <span className="header__return-text">Вернуться на главную</span>
        </Link>
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            <img
              src={logoImage}
              alt="Логотип"
              className="header__logo-image logo-block__image--light"
            />
            <img
              src={logoImageDark}
              alt="Логотип"
              className="header__logo-image logo-block__image--dark"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
