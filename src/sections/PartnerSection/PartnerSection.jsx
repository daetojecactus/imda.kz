import React from "react";
import ContactsBlock from "../../blocks/ContactsBlock/ContactsBlock";
import DownBlock from "../../blocks/DownBlock/DownBlock";
import LogoBlock from "../../blocks/LogoBlock/LogoBlock";
import SidebarBlock from "../../blocks/SidebarBlock/SidebarBlock";
import TitleBlock from "../../blocks/TitleBlock/TitleBlock";
import { motion } from "framer-motion";
import animation from "../../Data/animation";
import LightBlock from "../../blocks/LightBlock/LightBlock";
import EmptyBlock from "../../blocks/EmptyBlock/EmptyBlock";
import AdditionBlock from "../../blocks/AdditionBlock/AdditionBlock";
import "./PartnerSection.scss";

const PartnerSection = () => {
  return (
    <section className="partner" id="partner">
      <div className="partner__container container">
        <LogoBlock />
        <TitleBlock title="Наш партнер" />
        <ContactsBlock />
        <DownBlock anchor="#application" />
        <div className="partner__content content-block">
          <div className="partner__intro">
            <h3 className="partner__title">Услуга</h3>
            <p className="partner__subtitle">
              Съемка рекламных и&nbsp;имиджевых роликов
            </p>
            <p className="partner__descr">
              Сценарий создаётся нашей командой маркетологов, учитывая
              маркетинговые анализы, и&nbsp;воплощается партнером{" "}
              <a
                href="https://emodzi.kz/"
                target="blank"
                className="partner__descr-link"
              >
                emodzi.kz
              </a>
            </p>
          </div>
          <div className="partner__video">
            <iframe
              className="partner__video-content"
              src="https://www.youtube.com/embed/lSAC2E_nCW0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
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
            <motion.li
              className="sidebar-block__item sidebar-block__item--active"
              initial="hidden"
              whileInView="visible"
              variants={animation}
            >
              <a
                href="#partner"
                className="sidebar-block__link"
                style={{ color: "var(--color-bg)" }}
              >
                Наш партнер
              </a>
            </motion.li>
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
          <a
            className="addition-block__btn btn-reset"
            href="https://emodzi.kz/"
          >
            Подробнее
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
          </a>
        </AdditionBlock>
      </div>
    </section>
  );
};

export default PartnerSection;
