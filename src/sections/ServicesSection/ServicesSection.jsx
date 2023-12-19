import React, { useState } from "react";
import ContactsBlock from "../../blocks/ContactsBlock/ContactsBlock";
import DownBlock from "../../blocks/DownBlock/DownBlock";
import LightBlock from "../../blocks/LightBlock/LightBlock";
import LogoBlock from "../../blocks/LogoBlock/LogoBlock";
import SidebarBlock from "../../blocks/SidebarBlock/SidebarBlock";
import TitleBlock from "../../blocks/TitleBlock/TitleBlock";
import AdditionBlock from "../../blocks/AdditionBlock/AdditionBlock";
import EmptyBlock from "../../blocks/EmptyBlock/EmptyBlock";
import "./ServicesSection.scss";
import { motion } from "framer-motion";
import animation from "../../Data/animation";

const ServicesSection = ({ setActive }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services" id="services">
      <div className="services__container container">
        <LogoBlock />
        <TitleBlock title="Услуги" />
        <ContactsBlock />
        <DownBlock anchor="#portfolio" />
        <div className="services__content content-block">
          <table className="services__content-table">
            <tbody className="services__content-tbody">
              <tr className="services__content-tr">
                <th className="services__content-span">
                  <button
                    className={
                      toggleState === 1
                        ? "services__content-tab services__content-tab--active btn-reset"
                        : "services__content-tab btn-reset"
                    }
                    data-path="one"
                    aria-label="SMM-услуги"
                    onClick={() => toggleTab(1)}
                  >
                    SMM-услуги
                  </button>
                </th>
                <th className="services__content-span">
                  <button
                    className={
                      toggleState === 2
                        ? "services__content-tab services__content-tab--active btn-reset"
                        : "services__content-tab btn-reset"
                    }
                    data-path="two"
                    aria-label="Создание сайтов"
                    onClick={() => toggleTab(2)}
                  >
                    Создание сайтов
                  </button>
                </th>
              </tr>
              <tr className="services__content-tr">
                <th className="services__content-span">
                  <button
                    className={
                      toggleState === 3
                        ? "services__content-tab services__content-tab--active btn-reset"
                        : "services__content-tab btn-reset"
                    }
                    data-path="three"
                    aria-label="Дизайн услуги"
                    onClick={() => toggleTab(3)}
                  >
                    Дизайн услуги
                  </button>
                </th>
                <th className="services__content-span">
                  <button
                    className={
                      toggleState === 4
                        ? "services__content-tab services__content-tab--active btn-reset"
                        : "services__content-tab btn-reset"
                    }
                    data-path="four"
                    aria-label="Копирайтинг"
                    onClick={() => toggleTab(4)}
                  >
                    Копирайтинг
                  </button>
                </th>
              </tr>
              <tr className="services__content-tr">
                <th className="services__content-span">
                  <button
                    className={
                      toggleState === 5
                        ? "services__content-tab services__content-tab--active btn-reset"
                        : "services__content-tab btn-reset"
                    }
                    data-path="five"
                    aria-label="Таргетированная и контекстная реклама"
                    onClick={() => toggleTab(5)}
                  >
                    Таргетированная и<br />
                    контекстная реклама
                  </button>
                </th>
                <th className="services__content-span">
                  <button
                    className={
                      toggleState === 6
                        ? "services__content-tab services__content-tab--active btn-reset"
                        : "services__content-tab btn-reset"
                    }
                    data-path="six"
                    aria-label="Съемка фото и видеоконтента"
                    onClick={() => toggleTab(6)}
                  >
                    Съемка фото и<br />
                    видеоконтента
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
          <div className="services__content-info">
            <div
              className={
                toggleState === 1
                  ? "services__content-content services__content-content--active"
                  : "services__content-content"
              }
              data-target="one"
            >
              <h3 className="services__content-tagline">SMM-услуги</h3>
              <p className="services__content-descr">
                Не&nbsp;стоит объяснять, как важно ваше присутствие
                в&nbsp;социальных сетях и&nbsp;лучше доверить это
                профессионалам. Мы&nbsp;создали ряд удобных SMM-пакетов
                по&nbsp;выгодным ценам, среди которых точно есть идеальный для
                вашего бизнеса.
              </p>
            </div>
            <div
              className={
                toggleState === 2
                  ? "services__content-content services__content-content--active"
                  : "services__content-content"
              }
              data-target="two"
            >
              <h3 className="services__content-tagline">Создание сайтов</h3>
              <p className="services__content-descr">
                Четко услышав ваши пожелания мы&nbsp;реализуем сайт любой
                сложности по&nbsp;адекватным ценам и&nbsp;окажем техническую
                поддержку в&nbsp;период эксплуатации
              </p>
            </div>
            <div
              className={
                toggleState === 3
                  ? "services__content-content services__content-content--active"
                  : "services__content-content"
              }
              data-target="three"
            >
              <h3 className="services__content-tagline">Дизайн услуги</h3>
              <p className="services__content-descr">
                От&nbsp;логотипа до&nbsp;продающего сайта, наши дизайнеры
                создадут визуал вашего бренда. Но&nbsp;прежде всего маркетологи
                проведут тщательный анализ, подготовят техническое задание для
                дизайнеров, именно поэтому фирменный стиль будет не&nbsp;просто
                привлекательным, но&nbsp;и&nbsp;продающим.
              </p>
            </div>
            <div
              className={
                toggleState === 4
                  ? "services__content-content services__content-content--active"
                  : "services__content-content"
              }
              data-target="four"
            >
              <h3 className="services__content-tagline">Копирайтинг</h3>
              <p className="services__content-descr">
                Продающий текст&nbsp;&mdash; это 50&nbsp;% успеха.
                Мы&nbsp;наполним смыслом каждую букву, создадим уникальный Ton
                of&nbsp;voice и&nbsp;приведем к&nbsp;покупке вашего
                потенциального клиента с&nbsp;первой строчки.
              </p>
            </div>
            <div
              className={
                toggleState === 5
                  ? "services__content-content services__content-content--active"
                  : "services__content-content"
              }
              data-target="five"
            >
              <h3 className="services__content-tagline">
                Таргетированная и контекстная реклама
              </h3>
              <p className="services__content-descr">
                Вам нужно знать только одно: мы&nbsp;не&nbsp;сольем Ваш бюджет!
                После работы всех вышеперечисленных специалистов в&nbsp;игру
                вступают воины неорганического трафика&nbsp;и, можно сказать,
                вручают Ваш товар или услугу в&nbsp;руки покупателям.
              </p>
            </div>
            <div
              className={
                toggleState === 6
                  ? "services__content-content services__content-content--active"
                  : "services__content-content"
              }
              data-target="six"
            >
              <h3 className="services__content-tagline">
                Съемка фото и видеоконтента
              </h3>
              <p className="services__content-descr">
                Профессиональные фотографы и&nbsp;видеографы работают
                по&nbsp;четкому техническому заданию маркетологов
                и&nbsp;SMM-специалистов и&nbsp;создают шедевры не&nbsp;только
                искусства, но&nbsp;и&nbsp;маркетинга.
              </p>
            </div>
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
            <motion.li
              className="sidebar-block__item sidebar-block__item--active"
              initial="hidden"
              whileInView="visible"
              variants={animation}
            >
              <a
                href="#services"
                className="sidebar-block__link"
                style={{ color: "var(--color-bg)" }}
              >
                Услуги
              </a>
            </motion.li>
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

export default ServicesSection;
