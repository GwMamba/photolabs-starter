import { useReducer, useEffect } from 'react';

// Define initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  selectedTopic: null,
  photoData: [],
  topicData: [],
  favPhotos: [],
  showNotification: false,
};

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA'  
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favPhotos: [...state.favPhotos, action.payload], showNotification: action.payload.length > 0, };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favPhotos: state.favPhotos.filter((id) => id !== action.payload) };
    case ACTIONS.SET_MODAL_OPEN:
      return { ...state, isModalOpen: action.payload };
    case ACTIONS.SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SET_SELECTED_TOPIC:
      return { ...state, selectedTopic: action.payload };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
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

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  // Action creators
  const updateFavPhotoIds = (id) => {
    dispatch({ type: state.favPhotos.includes(id) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED, payload: id });
  };

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: true });
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photo });
  };

  const onTopicSelect = (topic) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topic });

    fetch(`http://localhost:8001/api/topics/photos/${topic.id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: false });
  };

  const isPhotoInFavorites = (id) => state.favPhotos.includes(id);

  return { state, dispatch, updateFavPhotoIds, onPhotoSelect, onClosePhotoDetailsModal, isPhotoInFavorites, onTopicSelect };
}

export default useApplicationData;