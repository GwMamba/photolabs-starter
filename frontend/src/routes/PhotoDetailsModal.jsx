import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const { photo, closeModal, photos, markAsFavPhoto } = props;
  const { id, title, urls, user, location } = photo;

  const onFavoriteClick = function() {
    markAsFavPhoto(props.photo.id);
  };

  // Filter out the main photo from the list of similar photos
  const similarPhotos = photos.filter((p) => p.id !== id);

  // Check if photo is already in favorites list
  const selected = props.isPhotoInFavorites(props.photo.id);
  
  return (
    < div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={() => closeModal()}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__body">
        <PhotoFavButton
          selected={selected}
          onClick={onFavoriteClick}
        />
        <img src={urls.regular} alt={title} className="photo-details-modal__image" />
        <header className="photo-details-modal__header">
          <div className="photo-details-modal__photographer-details">
            <img src={user.profile} className="photo-details-modal__photographer-profile" />
            <div className="photo-details-modal__photographer-info">
              <p>{user.username}</p>
              <p className="photo-details-modal__photographer-location">{location.city}, {location.country}</p>
            </div>
          </div>
        </header>
        <h3 className="photo-details-modal__similar-photos-heading">Similar Photos</h3>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={similarPhotos}
            markAsFavPhoto={props.markAsFavPhoto}
            openModal={props.openModal}
            isPhotoInFavorites={props.isPhotoInFavorites}
          />
        </div>
      </div>
    </div >
  );
};

export default PhotoDetailsModal;