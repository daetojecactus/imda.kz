import React from "react";
import AdditionBlock from "../../blocks/AdditionBlock/AdditionBlock";
import ContactsBlock from "../../blocks/ContactsBlock/ContactsBlock";
import DownBlock from "../../blocks/DownBlock/DownBlock";
import LightBlock from "../../blocks/LightBlock/LightBlock";
import LogoBlock from "../../blocks/LogoBlock/LogoBlock";
import SidebarBlock from "../../blocks/SidebarBlock/SidebarBlock";
import "./HeroSection.scss";
import heroImg1920 from "../../img/hero-1920.png";
import heroImg1200 from "../../img/hero-1200.png";
import heroImg500 from "../../img/hero-500.png";

export const HeroSection = ({ setActive }) => {
  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        <LogoBlock />
        <div className="hero__title title-block">
          <h1 className="hero__title-title">
            Маркетинговое digital-агентство полного цикла
          </h1>
        </div>
        <ContactsBlock />
        <DownBlock anchor="#about" />
        <div className="hero__content content-block">
          <picture className="hero__content-picture">
            <source
              type="image/png"
              srcSet={heroImg1920}
              media="(min-width: 1201px)"
            />
            <source
              type="image/png"
              srcSet={heroImg1200}
              media="(min-width: 901px)"
            />
            <source
              type="image/png"
              srcSet={heroImg1920}
              media="(min-width: 501px)"
            />
            <img
              className="hero__content-image"
              src={heroImg500}
              alt=""
              loading="lazy"
            />
          </picture>
        </div>
        <SidebarBlock>
          <ul className="sidebar-block__list list-reset">
            <li className="sidebar-block__item">
              <a href="#about" className="sidebar-block__link">
                О&nbsp;нас
              </a>
            </li>
            <li className="sidebar-block__item">
              <a href="#portfolio" className="sidebar-block__link">
                Портфолио
              </a>
            </li>
            <li className="sidebar-block__item">
              <a href="#services" className="sidebar-block__link">
                Услуги
              </a>
            </li>
            <li className="sidebar-block__item">
              <a href="#team" className="sidebar-block__link">
                Команда
              </a>
            </li>
            <li className="sidebar-block__item">
              <a href="#process" className="sidebar-block__link">
                Процесс работы
                <br />
                с&nbsp;нами
              </a>
            </li>
            <li className="sidebar-block__item">
              <a href="#partner" className="sidebar-block__link">
                Наш партнер
              </a>
            </li>
            <li className="sidebar-block__item">
              <a href="#application" className="sidebar-block__link">
                Обратная связь
              </a>
            </li>
          </ul>
        </SidebarBlock>
        <LightBlock />
        <div className="hero__empty empty-block"></div>
        <AdditionBlock>
          <button
            className="addition-block__btn btn-reset"
            onClick={() => setActive(true)}
          >
            Оставить заявку
            <svg
              className="addition-block__svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="7.25" y="7.25" width="14.5" height="2.55882" />
              <rect
                x="19.1914"
                y="21.75"
                width="11.9412"
                height="2.55882"
                transform="rotate(-90 19.1914 21.75)"
              />
              <path d="M6.99414 19.8105L18.1526 8.6521L20.1646 10.6641L9.00617 21.8226L6.99414 19.8105Z" />
            </svg>
          </button>
        </AdditionBlock>
      </div>
    </section>
  );
};

export default HeroSection;
