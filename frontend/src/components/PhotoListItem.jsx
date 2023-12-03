import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  //Extracting keys and values from the props we are receiving.
  const id = props.photo.id;
  const city = props.photo.location.city;
  const country = props.photo.location.country;
  const imageSource = props.photo.imageSource;
  const username = props.photo.username;
  const profile = props.photo.profile;

  return (
    <div className="photo-list__item">
      <PhotoFavButton {...props}
              isPhotoFavorited={props.isPhotoFavorited}
              addFavorite={props.addFavorite}
              removeFavorite={props.removeFavorite}
              key={id}/>
      <img src={imageSource}
       className="photo-list__image" 
       onClick={() => props.photoHandling(props)}/> 
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p style={{margin: '0px'}}>{username}</p>
          <p style={{margin: '0px'}} className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;