import React from "react";
import SquadmanList from "../components/Squadman/SquadmanList";
import Header from "../sections/Header/Header";
import team from "../Data/TeamData.json";

const TeamPage = () => {
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
    <div className="">
      <Header />
      <main className="main">
        <section className="squad" id="squad">
          <div className="squad__container">
            <h2 className="squad__title">Наши члены команды</h2>
            <SquadmanList team={team} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeamPage;
