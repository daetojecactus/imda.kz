import React from "react";
import ContactsBlock from "../../blocks/ContactsBlock/ContactsBlock";
import DownBlock from "../../blocks/DownBlock/DownBlock";
import LightBlock from "../../blocks/LightBlock/LightBlock";
import LogoBlock from "../../blocks/LogoBlock/LogoBlock";
import SidebarBlock from "../../blocks/SidebarBlock/SidebarBlock";
import TitleBlock from "../../blocks/TitleBlock/TitleBlock";
import AdditionBlock from "../../blocks/AdditionBlock/AdditionBlock";
import EmptyBlock from "../../blocks/EmptyBlock/EmptyBlock";
import "./ApplicationSectioan.scss";
// import Form from "../../components/Form/Form";
import { motion } from "framer-motion";
import animation from "../../Data/animation";
import FormMain from "../../components/Form/FormMain";

const ApplicationSectioan = ({ setActive, setSuccessActive }) => {
  return (
    <section className="application" id="application">
      <div className="container application__container">
        <LogoBlock />
        <TitleBlock title="Оставить заявку" />
        <ContactsBlock />
        <DownBlock anchor="#footer" />
        <div className="application__content content-block">
          <FormMain setSuccess={setSuccessActive} />
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
            <motion.li
              className="sidebar-block__item sidebar-block__item--active"
              initial="hidden"
              whileInView="visible"
              variants={animation}
            >
              <a
                href="#application"
                className="sidebar-block__link"
                style={{ color: "var(--color-bg)" }}
              >
                Обратная связь
              </a>
            </motion.li>
          </ul>
        </SidebarBlock>
        <LightBlock />
        <EmptyBlock />
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

export default ApplicationSectioan;
