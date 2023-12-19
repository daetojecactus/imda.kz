import React from "react";
import "./Footer.scss";
import logoImage from "../../img/logo-light.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__container">
        <div className="footer__logo">
          <Link to="/" className="footer__logo-link">
            <img src={logoImage} alt="Логотип" className="footer__logo-image" />
          </Link>
        </div>
        <div className="footer__title">
          <h2 className="footer__title-title">Наша контактная информация</h2>
        </div>
        <div className="footer__social">
          <p className="footer__social-descr">Социальные сети</p>
        </div>
        <div className="footer__schedule">
          <p className="footer__schedule-descr">
            <b>Режим работы</b> Понедельник-Пятница <b>10:00 - 19:00</b>
          </p>
        </div>
        <div className="footer__contacts">
          <ul className="footer__contacts-list list-reset">
            <li className="footer__contacts-item">
              <span className="footer__contacts-caption">
                Контактные телефоны
              </span>
              <a href="tel:+77479111825" className="footer__contacts-link">
                +7&nbsp;747&nbsp;911 18&nbsp;25
              </a>
            </li>
            <li className="footer__contacts-item">
              <span className="footer__contacts-caption">По всем вопросам</span>
              <a
                href="mailto:i.mda01@mail.ru"
                className="footer__contacts-link"
              >
                i.mda01@mail.ru
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__links">
          <ul className="footer__links-list list-reset">
            <li className="footer__links-item">
              <a href="mailto:i.mda01@mail.ru" className="footer__links-link">
                <img
                  src="images/mail-icon.svg"
                  alt="mail"
                  className="footer__links-image footer__links-image--mail"
                />
              </a>
            </li>
            <li className="footer__links-item">
              <a
                href="https://www.instagram.com/im_digital_agency"
                className="footer__links-link"
              >
                <img
                  src="images/instagram-icon.svg"
                  alt="instagram"
                  className="footer__links-image"
                />
              </a>
            </li>
            <li className="footer__links-item">
              <a
                href="https://wa.me/77479111825"
                className="footer__links-link"
              >
                <img
                  src="images/whatsapp-icon.svg"
                  alt="whatsapp"
                  className="footer__links-image"
                />
              </a>
            </li>
            <li className="footer__links-item">
              <a
                href="https://t.me/imdigitalagency"
                className="footer__links-link"
              >
                <img
                  src="images/telegram-icon.svg"
                  alt="telegram"
                  className="footer__links-image"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
