import React from "react";
import "./DownBlock.scss";

const DownBlock = ({ anchor }) => {
  return (
    <div className="down-block">
      <a href={anchor} className="down-block__link">
        Спуститься ниже
      </a>
    </div>
  );
};

export default DownBlock;
