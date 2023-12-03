import React, { useState } from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const App = () => {
  // Define state to track liked photos
  const [likedPhotos, setLikedPhotos] = useState([]);

  // Function to handle liking a photo
  const handleLikeClick = (photoId) => {
  setLikedPhotos((prevLikedPhotos) => {
    if (prevLikedPhotos.includes(photoId)) {
      // If already liked, remove from the liked photos
      return prevLikedPhotos.filter((id) => id !== photoId);
    }
    // If not liked, add to the liked photos
    return [...prevLikedPhotos, photoId];
  });
};

  const photos = new Array(3).fill().map((_, index) => ({
    ...sampleDataForPhotoListItem,
    id: `${index + 1}`, // Make each ID unique
  }));

  return (
    <div className="App">
      
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isPhotoFavorited={likedPhotos.includes(photo.id)}
          addFavorite={() => handleLikeClick(photo.id)}
          removeFavorite={() => handleLikeClick(photo.id)}
        />
      ))}
    </div>
  );
};

export default App;