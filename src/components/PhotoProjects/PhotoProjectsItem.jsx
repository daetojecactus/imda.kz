import React from "react";

const PhotoProjectsItem = ({ photo }) => {
  return (
    <div className="projects__item">
      <img src={photo.image} alt={photo.title} className="projects__image" />
    </div>
  );
};

export default PhotoProjectsItem;
