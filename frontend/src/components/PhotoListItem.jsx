import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
console.log("rendering photolistitem");

  const handlePhotoClick = () => {
    props.openModal(props.photo);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton 
       selected={false}
       onClick={props.togglefavorite}
     />
      <img 
      className="photo-list__image" 
      src={props.imageSource} 
      alt="Photo" 
      onClick={handlePhotoClick}
     />
      <div className="photo-list__user-details">
        <img 
        src={props.profile} 
        alt="Profile" 
        className="photo-list__user-profile" 
        />
        <div className="photo-list__user-info">
          <h3>{props.username}</h3>
          <h3 className="photo-list__user-location">{props.city}, {props.country}</h3>
        </div>
      </div>
    </div>
  );
};
  
export default PhotoListItem;