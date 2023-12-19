import React from "react";

const SmmProjectsItem = ({ smm }) => {
  return (
    <div className="projects__item">
      <img src={smm.image} alt={smm.title} className="projects__image" />
    </div>
  );
};

export default SmmProjectsItem;
