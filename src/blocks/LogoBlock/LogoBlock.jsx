import React from "react";
import "./LogoBlock.scss";
import logoImage from "../../img/logo.svg";
import logoImageDark from "../../img/logo-light.svg";
import { Link } from "react-router-dom";

const LogoBlock = () => {
  return (
    <div className="logo-block">
      <Link to="/" className="logo-block__link">
        <img src={logoImage} alt="Логотип" className="logo-block__image" />
        <img src={logoImageDark} alt="Логотип" className="logo-block__image" />
      </Link>
    </div>
  );
};

export default LogoBlock;
