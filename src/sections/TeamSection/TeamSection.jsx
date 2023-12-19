import React from "react";
import ContactsBlock from "../../blocks/ContactsBlock/ContactsBlock";
import DownBlock from "../../blocks/DownBlock/DownBlock";
import LightBlock from "../../blocks/LightBlock/LightBlock";
import LogoBlock from "../../blocks/LogoBlock/LogoBlock";
import SidebarBlock from "../../blocks/SidebarBlock/SidebarBlock";
import TitleBlock from "../../blocks/TitleBlock/TitleBlock";
import AdditionBlock from "../../blocks/AdditionBlock/AdditionBlock";
import EmptyBlock from "../../blocks/EmptyBlock/EmptyBlock";
import "./TeamSection.scss";
import { TeamSlider } from "../../components/TeamSlider/TeamSlider";
import slides from "../../Data/TeamData.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import animation from "../../Data/animation";

const TeamSection = () => {
  return (
    <section className="team" id="team">
      <div className="container team__container">
        <LogoBlock />
        <TitleBlock title="Команда" />
        <ContactsBlock />
        <DownBlock anchor="#process" />
        <div className="team__content content-block">
          <TeamSlider slides={slides} />
          <Link to="/team" className="team__mobile">
            Подробнее
            <svg
              className="team__mobile-svg"
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
          </Link>
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
            <motion.li
              className="sidebar-block__item sidebar-block__item--active"
              initial="hidden"
              whileInView="visible"
              variants={animation}
            >
              <a
                href="#team"
                className="sidebar-block__link"
                style={{ color: "var(--color-bg)" }}
              >
                Команда
              </a>
            </motion.li>
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
        <EmptyBlock />
        <AdditionBlock>
          <Link className="addition-block__btn btn-reset" to="/team">
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
          </Link>
        </AdditionBlock>
      </div>
    </section>
  );
};

export default TeamSection;
