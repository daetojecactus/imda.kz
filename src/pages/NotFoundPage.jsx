import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
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

  return (
    <div className="not-page__container">
      <div className="not-page__content">
        <h2 className="not-page__title">Ничего не найдено!</h2>
        <p className="not-page__descr">
          Вернуться на &nbsp;
          <Link to="/" className="not-page__link">
            главную страницу.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
