import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = ({ topics, favPhotos, topicSelect, photos, markFavPhoto, openModal, isPhotoInFavorites }) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favorites={favPhotos.length} topicSelect={topicSelect} />
      <PhotoList photos={photos} markFavPhoto={markFavPhoto} openModal={openModal} isPhotoInFavorites={isPhotoInFavorites} />
    </div>
  );
};

export default HomeRoute;