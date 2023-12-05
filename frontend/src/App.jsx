import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { state, updateToFavPhotoIds, onPhotoSelect, onClosePhotoDetailsModal, isPhotoInFavorites, onTopicSelect } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        openModal={onPhotoSelect}
        markAsFavPhoto={updateToFavPhotoIds}
        isPhotoInFavorites={isPhotoInFavorites}
        favPhotos={state.favPhotos}
        topicSelect={onTopicSelect}
      />

      {state.isModalOpen && <PhotoDetailsModal
        closeModal={onClosePhotoDetailsModal}
        photo={state.selectedPhoto}
        photos={state.photoData}
        markAsFavPhoto={updateToFavPhotoIds}
        isPhotoInFavorites={isPhotoInFavorites}
      />}

    </div>

  );
};

export default App;