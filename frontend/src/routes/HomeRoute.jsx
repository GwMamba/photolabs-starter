import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={props.topics}
        favorites={props.favPhotos.length}
        topicSelect={props.topicSelect}
      />

      <PhotoList
        photos={props.photos}
        markAsFavPhoto={props.markAsFavPhoto}
        openModal={props.openModal}
        isPhotoInFavorites={props.isPhotoInFavorites}
      />

    </div>
  );
};

export default HomeRoute;