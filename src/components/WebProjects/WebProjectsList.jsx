import React from "react";
import Masonry from "react-masonry-css";
import WebProjectsItem from "./WebProjectsItem";

const WebProjectsList = ({ webs }) => {
  const breakpoints = {
    default: 2,
  };

  return (
    <div>
      <h2 className="projects__title">Web-Design</h2>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid list-reset"
        columnClassName="my-masonry-grid_column"
      >
        {webs.map((web) => (
          <WebProjectsItem key={web.id} web={web} />
        ))}
      </Masonry>
    </div>
  );
};

export default WebProjectsList;
