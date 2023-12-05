import { useReducer, useEffect } from 'react';

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
};

// Define initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favPhotos: [],
  photoData: [],
  topicData: [],
  selectedTopic: null
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favPhotos: [...state.favPhotos, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favPhotos: state.favPhotos.filter((id) => id !== action.payload) };
    case ACTIONS.SET_MODAL_OPEN:
      return { ...state, isModalOpen: action.payload };
    case ACTIONS.SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    case ACTIONS.SET_SELECTED_TOPIC:
      return { ...state, selectedTopic: action.payload };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

function useApplicationData() {
  // Use useReducer with the reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch photos data from API on first render
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  //fetch topics data from API on first render
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  // Action creators
  const updateToFavPhotoIds = (id) => {
    dispatch({ type: state.favPhotos.includes(id) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED, payload: id });
  };

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: true });
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photo });
  };

  const onTopicSelect = (topic) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topic });

    //fetch photos for topic id from API
    fetch(`http://localhost:8001/api/topics/photos/${topic.id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: false });
  };

  const isPhotoInFavorites = (id) => state.favPhotos.includes(id);

  return { state, updateToFavPhotoIds, onPhotoSelect, onClosePhotoDetailsModal, isPhotoInFavorites, onTopicSelect };
}

export default useApplicationData;