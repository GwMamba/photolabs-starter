import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {

  const list = props.photos.map((photo) => {

    const selected = props.isPhotoInFavorites(photo.id);
  
    return (
      <PhotoListItem
        imageSource={photo.urls.full}
        username={photo.user.username}
        city={photo.location.city}
        country={photo.location.country}
        profile={photo.user.profile}
        key={photo.id}
        markAsFavPhoto={() => props.markAsFavPhoto(photo.id)}
        photo={photo}
        openModal={props.openModal}
        selected={selected}
      />
    );
  }
  )

  return (
    <ul className="photo-list">
      {list}
    </ul>
  );
};

export default PhotoList;