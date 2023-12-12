import React from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicSelect={props.topicSelect} topics={props.topics} />
      <FavBadge favorites={props.favorites} selected={props.favorites} />
    </div>
  )
};

export default TopNavigation;