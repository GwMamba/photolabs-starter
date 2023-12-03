import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { isPhotoFavorited, addFavorite, removeFavorite } = props;

  // Set up state to track the like status
  const [isLiked, setLiked] = useState();

  // Define a function to handle the click event
  const handleLikeClick = () => {
    // Toggle the like status when the icon is clicked
    console.log('Button clicked');
    setLiked(!isLiked);
    isPhotoFavorited ? removeFavorite() : addFavorite();
    };

  return (
    <div className="photo-list__fav-icon" onClick={handleLikeClick} style={{zIndex: 1}}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isLiked={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
