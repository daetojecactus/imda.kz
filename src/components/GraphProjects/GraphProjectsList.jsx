import React from "react";
import GraphProjectsItem from "./GraphProjectsItem";
import "./GraphProjects.scss";
import Masonry from "react-masonry-css";

const GraphProjectsList = ({ graphs, graphsFull }) => {
  const breakpoints = {
    default: 2,
  };

  const breakpointsFull = {
    default: 1,
  };

  return (
    <div className="">
      <h2 className="projects__title">Графический дизайн</h2>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid list-reset"
        columnClassName="my-masonry-grid_column"
      >
        {graphs.map((graph) => (
          <GraphProjectsItem key={graph.id} graph={graph} />
        ))}
      </Masonry>
      <Masonry
        breakpointCols={breakpointsFull}
        className="my-masonry-grid list-reset"
        columnClassName="my-masonry-grid_column"
      >
        {graphsFull.map((graph) => (
          <GraphProjectsItem key={graph.id} graph={graph} />
        ))}
      </Masonry>
    </div>
  );
};

export default GraphProjectsList;
