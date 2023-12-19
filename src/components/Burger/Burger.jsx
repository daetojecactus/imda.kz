import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../img/logo.svg";
import logoImageDark from "../../img/logo-light.svg";
import "./Burger.scss";
import { useState } from "react";

const Burger = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const body = document.body;

  if (burgerActive) {
    body.classList.add("stop-scroll");
  } else {
    body.classList.remove("stop-scroll");
  }

  let clickedClass = "clicked";
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <header className="mobile-header">
      <Link to="/" className="logo-block__link mobile-header__link">
        <img
          src={logoImage}
          alt="Логотип"
          className="logo-block__image mobile-header__image"
        />
        <img
          src={logoImageDark}
          alt="Логотип"
          className="logo-block__image mobile-header__image"
        />
      </Link>
      <div className="burger">
        <button
          className={
            burgerActive
              ? "burger__btn burger__btn--active btn-reset"
              : "burger__btn btn-reset"
          }
          onClick={() => setBurgerActive(!burgerActive)}
        >
          <span className="burger__line"></span>
        </button>
        <div
          className={
            burgerActive ? "burger__nav burger__nav--active" : "burger__nav"
          }
        >
          <button
            className={theme === "dark" ? clickedClass : ""}
            id="darkModeMobile"
            onClick={(e) => switchTheme(e)}
          >
            {/* light&nbsp;on */}
          </button>
          <ul className="burger__nav-list list-reset">
            <li className="burger__nav-item">
              <a
                href="#about"
                className="burger__nav-link"
                onClick={() => setBurgerActive(!burgerActive)}
              >
                О&nbsp;нас
              </a>
            </li>
            <li className="burger__nav-item">
              <a
                href="#portfolio"
                className="burger__nav-link"
                onClick={() => setBurgerActive(!burgerActive)}
              >
                Портфолио
              </a>
            </li>
            <li className="burger__nav-item">
              <a
                href="#services"
                className="burger__nav-link"
                onClick={() => setBurgerActive(!burgerActive)}
              >
                Услуги
              </a>
            </li>
            <li className="burger__nav-item">
              <a
                href="#team"
                className="burger__nav-link"
                onClick={() => setBurgerActive(!burgerActive)}
              >
                Команда
              </a>
            </li>
            <li className="burger__nav-item">
              <a
                href="#process"
                className="burger__nav-link"
                onClick={() => setBurgerActive(!burgerActive)}
              >
                Процесс работы
                <br />
                с&nbsp;нами
              </a>
            </li>
            <li className="burger__nav-item">
              <a
                href="#partner"
                className="burger__nav-link"
                onClick={() => setBurgerActive(!burgerActive)}
              >
                Наш партнер
              </a>
            </li>
            <li className="burger__nav-item">
              <a
                href="#application"
                className="burger__nav-link"
                onClick={() => setBurgerActive(!burgerActive)}
              >
                Обратная связь
              </a>
            </li>
          </ul>
          <ul className="burger__social-list list-reset">
            <li className="burger__social-item">
              <a
                href="https://wa.me/77479111825"
                className="burger__social-link"
              >
                Whatsapp
              </a>
            </li>
            <li className="burger__social-item">
              <a
                href="https://t.me/imdigitalagency"
                className="burger__social-link"
              >
                Telegram
              </a>
            </li>
            <li className="burger__social-item">
              <a
                href="https://www.instagram.com/im_digital_agency"
                className="burger__social-link"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Burger;
