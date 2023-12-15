import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  console.log("rendering photolistitem");

  const handlePhotoClick = () => {
    props.openModal(props.photo);
  };

  const handleLikeClick = () => {
    if (typeof props.markFavPhoto === 'function') {
      props.markFavPhoto();
    } else {
      console.error('markFavPhoto is not a function');
    }
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        selected={props.selected}
        onClick={handleLikeClick}
      />
      <img
        className="photo-list__image"
        src={props.photo.urls.full}
        alt="Photo"
        onClick={handlePhotoClick}
      />
      <div className="photo-list__user-details">
        <img
          src={props.photo.user.profile}
          alt="Profile"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <h3>{props.photo.user.username}</h3>
          <h3 className="photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;