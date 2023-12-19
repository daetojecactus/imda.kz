import React from "react";
import ContactsBlock from "../../blocks/ContactsBlock/ContactsBlock";
import DownBlock from "../../blocks/DownBlock/DownBlock";
import LightBlock from "../../blocks/LightBlock/LightBlock";
import LogoBlock from "../../blocks/LogoBlock/LogoBlock";
import SidebarBlock from "../../blocks/SidebarBlock/SidebarBlock";
import TitleBlock from "../../blocks/TitleBlock/TitleBlock";
import AdditionBlock from "../../blocks/AdditionBlock/AdditionBlock";
import "./AboutSection.scss";
import { motion } from "framer-motion";
import animation from "../../Data/animation";

const AboutSection = ({ setActive }) => {
  return (
    <section className="about" id="about">
      <div className="container about__container">
        <LogoBlock />
        <TitleBlock title="О&nbsp;нас" />
        <ContactsBlock />
        <DownBlock anchor="#services" />
        <div className="content-block about__content">
          <h3 className="about__content-caption">О&nbsp;нас</h3>
          <div className="about__content-info">
            <p className="about__content-subcaption">
              I`m digital agency&nbsp;&mdash; команда digital-специалистов,
              которая создаст имидж вашего бизнеса и&nbsp;обеспечит продажи
              с&nbsp;помощью большого арсенала маркетинговых инструментов.
            </p>
            <h4 className="about__content-tagline">
              Ваша прибыль&nbsp;&mdash; наша цель
            </h4>
            <ul className="about__content-list">
              <li className="about__content-item">
                <p className="about__content-descr">
                  работаем по&nbsp;четким брифам, делаем продажи с&nbsp;помощью
                  комплексных решений интернет-маркетинга, слышим каждое ваше
                  слово, предлагаем, но&nbsp;не&nbsp;навязываем
                  и&nbsp;предоставляем подробные отчеты.
                </p>
              </li>
              <li className="about__content-item">
                <p className="about__content-descr">
                  обеспечиваем комфортное сотрудничество для Вас за&nbsp;счет
                  нашей честности и&nbsp;гибкости.
                </p>
              </li>
              <li className="about__content-item">
                <p className="about__content-descr">
                  реализуем идеи, пропуская их&nbsp;через маркетинговый анализ
                  и&nbsp;учитывая самые свежие тенденции.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <SidebarBlock>
          <ul className="sidebar-block__list list-reset">
            <motion.li
              className="sidebar-block__item sidebar-block__item--active"
              initial="hidden"
              whileInView="visible"
              variants={animation}
            >
              <a
                href="#about"
                className="sidebar-block__link"
                style={{ color: "var(--color-bg)" }}
              >
                О&nbsp;нас
              </a>
            </motion.li>
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
        <div className="about__empty empty-block"></div>
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

export default AboutSection;
