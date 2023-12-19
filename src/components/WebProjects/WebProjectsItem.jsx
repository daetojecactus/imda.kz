import React from "react";

const WebProjectsItem = ({ web }) => {
  return (
    <div className="projects__item">
      <img src={web.image} alt={web.title} className="projects__image" />
    </div>
  );
};

export default WebProjectsItem;
