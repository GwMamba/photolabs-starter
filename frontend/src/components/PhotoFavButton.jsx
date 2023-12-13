import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { selected, onClick } = props;

  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg" >
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;