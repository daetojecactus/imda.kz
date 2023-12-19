import React from "react";
import "./TitleBlock.scss";

const TitleBlock = ({ title }) => {
  return (
    <div className="title-block">
      <h2 className="title-block__title">{title}</h2>
    </div>
  );
};

export default TitleBlock;
