import React from "react";
import ContactsBlock from "../../blocks/ContactsBlock/ContactsBlock";
import DownBlock from "../../blocks/DownBlock/DownBlock";
import LightBlock from "../../blocks/LightBlock/LightBlock";
import LogoBlock from "../../blocks/LogoBlock/LogoBlock";
import SidebarBlock from "../../blocks/SidebarBlock/SidebarBlock";
import TitleBlock from "../../blocks/TitleBlock/TitleBlock";
import AdditionBlock from "../../blocks/AdditionBlock/AdditionBlock";
import EmptyBlock from "../../blocks/EmptyBlock/EmptyBlock";
import "./ProcessSection.scss";
import { motion } from "framer-motion";
import animation from "../../Data/animation";

const ProcessSection = ({ setActive }) => {
  return (
    <section className="process" id="process">
      <div className="container process__container">
        <LogoBlock />
        <TitleBlock title="Процесс работы с&nbsp;нами" />
        <ContactsBlock />
        <DownBlock anchor="#partner" />
        <div className="process__content content-block">
          <ul className="process__content-list">
            <li className="process__content-item">
              <h3 className="process__content-tagline">
                {" "}
                <span className="process__content-number">01.</span>Заявка
              </h3>
              <p className="process__content-descr">
                Связаться с&nbsp;нами можно по&nbsp;контактному номеру телефона
                или через заявку на&nbsp;сайте.
              </p>
            </li>
            <li className="process__content-item">
              <h3 className="process__content-tagline">
                <span className="process__content-number">02.</span>Консультация
              </h3>
              <p className="process__content-descr">
                Этот этап определит задачи, поставленные перед нами.
                Мы&nbsp;подробно расскажем о&nbsp;наших услугах и&nbsp;ответим
                на&nbsp;интересующие вопросы.
              </p>
            </li>
            <li className="process__content-item">
              <h3 className="process__content-tagline">
                <span className="process__content-number">03.</span>Бриф
              </h3>
              <p className="process__content-descr">
                Бриф поможет наладить понимание задач, поставленных перед нами
                и&nbsp;документально зафиксировать&nbsp;их.
              </p>
            </li>
            <li className="process__content-item">
              <h3 className="process__content-tagline">
                <span className="process__content-number">04.</span>Договор
              </h3>
              <p className="process__content-descr">
                Перед началом работы необходимо заключить договор,
                в&nbsp;котором будут подробно указаны условия работы, сроки,
                суммы и&nbsp;дополнительные приложения.
              </p>
            </li>
            <li className="process__content-item">
              <h3 className="process__content-tagline">
                <span className="process__content-number">05.</span>Оплата
              </h3>
              <p className="process__content-descr">
                Мы&nbsp;начнем работу сразу после внесения предоплаты
                в&nbsp;размере&nbsp;50% от&nbsp;суммы.
              </p>
            </li>
            <li className="process__content-item">
              <h3 className="process__content-tagline">
                <span className="process__content-number">06.</span>Начало
                работы
              </h3>
              <p className="process__content-descr">
                После получения необходимых данный, наша команда присутпает к
                выполнению проекта. На данном этапе мы всегда находимся с вами и
                готовы ответить на любые ваши вопросы
              </p>
            </li>
          </ul>
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
            <motion.li
              className="sidebar-block__item sidebar-block__item--process sidebar-block__item--active"
              initial="hidden"
              whileInView="visible"
              variants={animation}
            >
              <a
                href="#process"
                className="sidebar-block__link"
                style={{ color: "var(--color-bg)" }}
              >
                Процесс работы
                <br />
                с&nbsp;нами
              </a>
            </motion.li>
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

export default ProcessSection;
