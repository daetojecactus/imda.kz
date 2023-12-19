import React from "react";
import PhotoProjectsItem from "./PhotoProjectsItem";
import Masonry from "react-masonry-css";

const PhotoProjectsList = ({ photos }) => {
  const breakpoints = {
    default: 2,
  };

  return (
    <div>
      <h2 className="projects__title">Фотосъемка</h2>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid list-reset"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo) => (
          <PhotoProjectsItem key={photo.id} photo={photo} />
        ))}
      </Masonry>
    </div>
  );
};

export default PhotoProjectsList;
