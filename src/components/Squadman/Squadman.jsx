import React from "react";

const Squadman = ({ squadman }) => {
  return (
    <li className="squadman">
      <img
        src={squadman.image}
        alt={squadman.title}
        className="squadman__image"
      />
      <div className="squadman__info">
        <h3 className="squadman__name">{squadman.name}</h3>
        <p className="squadman__descr">{squadman.quote}</p>
        <p className="squadman__position">{squadman.position}</p>
      </div>
    </li>
  );
};

export default Squadman;
