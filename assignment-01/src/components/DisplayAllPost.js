import React from "react";
import { useState } from "react";

import "./Posts.css";

const formatText = (text, maxLength) => {
  const length = text.length;
  let prefix = text;
  if (length > maxLength) {
    prefix = text.substring(0, maxLength) + "...";
  }
  return prefix;
};

const DisplayAllPost = (props) => {
  const { post, onClickReadMore } = props;
  console.log("post", post);
  return (
    <React.Fragment>
      <div className="posts-card">
        <div className="posts-card-2">
          <div className="posts-header">
            <div className="avatar"> {post.author.substring(0, 1)} </div>
            <div className="posts-title">{formatText(post.title, 45)}</div>
          </div>
          <img
            className="posts-image"
            src={require("../services/PostImages/" + post.cover).default}
          />
          <div className="posts-desc">{formatText(post.description, 350)}</div>
          <button className="btn-more" onClick={() => onClickReadMore(post)}>
            READ MORE
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayAllPost;
