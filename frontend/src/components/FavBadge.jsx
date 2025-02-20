import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={props.favorites} selected={true} />
    </div>
  ) 
};

export default FavBadge;