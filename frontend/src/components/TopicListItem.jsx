import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const handleTopicClick = () => {
    props.topicSelect(props.topic);
  };

  return (
    <div className="topic-list__item">
      <h2 onClick={handleTopicClick}>{props.label}</h2>
    </div>
  );
};

export default TopicListItem;