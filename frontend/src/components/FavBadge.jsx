import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ showNotification }) => {
  
  return (
    <div className='fav-badge'>
      <FavIcon className='fav-badge__count ' displayAlert={showNotification} />
    </div>
  ) 
};

export default FavBadge;