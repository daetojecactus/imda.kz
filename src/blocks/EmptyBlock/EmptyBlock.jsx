import React from "react";
import "./EmptyBlock.scss";

const EmptyBlock = ({ children }) => {
  return <div className="empty-block">{children}</div>;
};

export default EmptyBlock;
