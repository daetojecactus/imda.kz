import React from "react";
import Masonry from "react-masonry-css";
import SmmProjectsItem from "./SmmProjectsItem";

const SmmProjectsList = ({ smms }) => {
  const breakpoints = {
    default: 2,
  };

  return (
    <div>
      <h2 className="projects__title">SMM</h2>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid list-reset"
        columnClassName="my-masonry-grid_column"
      >
        {smms.map((smm) => (
          <SmmProjectsItem key={smm.id} smm={smm} />
        ))}
      </Masonry>
    </div>
  );
};

export default SmmProjectsList;
