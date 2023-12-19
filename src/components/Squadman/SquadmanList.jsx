import React from "react";
import Squadman from "./Squadman";
import "./Squadman.scss";

const SquadmanList = ({ team }) => {
  return (
    <ul className="squad__list list-reset">
      {team.map((squadman) => (
        <Squadman key={squadman.id} squadman={squadman} />
      ))}
    </ul>
  );
};

export default SquadmanList;
