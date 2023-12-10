import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const topicClickHandler = () => {
    props.topicSelect(props.topic);
  };

  return (
    <div className="topic-list__item">
      <h2 onClick={topicClickHandler}>{props.label}</h2>
    </div>
  );
};

export default TopicListItem;