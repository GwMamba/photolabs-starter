import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem 
        label={topic.title}
        key={topic.id}
        topic={topic}
        topicSelect={props.topicSelect}
        />
      ))}
    </div>
  );
};

export default TopicList;