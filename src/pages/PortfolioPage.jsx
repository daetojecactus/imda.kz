import React from "react";
import logoImage from "../img/logo.svg";
import logoImageDark from "../img/logo-light.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import GraphProjectsList from "../components/GraphProjects/GraphProjectsList";
import SmmProjectsList from "../components/SmmProjects/SmmProjectsList";
import WebProjectsList from "../components/WebProjects/WebProjectsList";
import PhotoProjectsList from "../components/PhotoProjects/PhotoProjectsList";
import smms from "../Data/SmmProjectData.json";
import graphs from "../Data/GraphProjectsData.json";
import graphsFull from "../Data/GraphProjectsDataFull.json";
import webs from "../Data/WebProjectsData.json";
import photos from "../Data/PhotoProjectsData.json";

const PortfolioPage = () => {
  const body = document.body;
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

  const [togglePortfolio, setTogglePortfolio] = useState(1);

  const tabPortfolio = (index) => {
    setTogglePortfolio(index);
  };

  return (
    <div className="">
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__return">
            <span className="header__return-icon"></span>
            <span className="header__return-text">Вернуться на главную</span>
          </Link>
          <div className="header__logo">
            <Link to="/" className="header__logo-link">
              <img
                src={logoImage}
                alt="Логотип"
                className="header__logo-image logo-block__image--light"
              />
              <img
                src={logoImageDark}
                alt="Логотип"
                className="header__logo-image logo-block__image--dark"
              />
            </Link>
          </div>
          <div className="header__menu">
            <ul className="header__menu-list list-reset">
              <li className="header__menu-item">
                <button
                  className={
                    togglePortfolio === 1
                      ? "header__menu-tab header__menu-tab--active btn-reset"
                      : "header__menu-tab btn-reset"
                  }
                  aria-label="Графический дизайн"
                  onClick={() => tabPortfolio(1)}
                >
                  Графический дизайн
                </button>
              </li>
              <li className="header__menu-item">
                <button
                  className={
                    togglePortfolio === 2
                      ? "header__menu-tab header__menu-tab--active btn-reset"
                      : "header__menu-tab btn-reset"
                  }
                  aria-label="SMM"
                  onClick={() => tabPortfolio(2)}
                >
                  SMM
                </button>
              </li>
              <li className="header__menu-item">
                <button
                  className={
                    togglePortfolio === 3
                      ? "header__menu-tab header__menu-tab--active btn-reset"
                      : "header__menu-tab btn-reset"
                  }
                  aria-label="Web-Design"
                  onClick={() => tabPortfolio(3)}
                >
                  Web-Design
                </button>
              </li>
              <li className="header__menu-item">
                <button
                  className={
                    togglePortfolio === 4
                      ? "header__menu-tab header__menu-tab--active btn-reset"
                      : "header__menu-tab btn-reset"
                  }
                  aria-label="Фотосъемка"
                  onClick={() => tabPortfolio(4)}
                >
                  Фотосъемка
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="projects" id="projects">
          <div className="projects__container">
            <div
              className={
                togglePortfolio === 1
                  ? "projects__content projects__content--active"
                  : "projects__content"
              }
            >
              <GraphProjectsList graphs={graphs} graphsFull={graphsFull} />
            </div>
            <div
              className={
                togglePortfolio === 2
                  ? "projects__content projects__content--active"
                  : "projects__content"
              }
            >
              <SmmProjectsList smms={smms} />
            </div>
            <div
              className={
                togglePortfolio === 3
                  ? "projects__content projects__content--active"
                  : "projects__content"
              }
            >
              <WebProjectsList webs={webs} />
            </div>
            <div
              className={
                togglePortfolio === 4
                  ? "projects__content projects__content--active"
                  : "projects__content"
              }
            >
              <PhotoProjectsList photos={photos} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;
