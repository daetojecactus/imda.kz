import React from "react";

const GraphProjectsItem = ({ graph }) => {
  return (
    <div className="projects__item">
      <img src={graph.image} alt={graph.title} className="projects__image" />
    </div>
  );
};

export default GraphProjectsItem;
