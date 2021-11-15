import React from "react";
import { formatText } from '../../Utils';

const Card = (props) => {
  const { post, onClickReadMore } = props;
  return (
      <div className="posts-card">
        <div className="posts-card-2">
          <div className="posts-header">
            <div className="avatar"> {post.author.substring(0, 1)} </div>
            <div className="posts-title">{formatText(post.title, 45)}</div>
          </div>
          <img
            className="posts-image"
            src={require("../../Service/PostImages/" + post.cover).default}
            alt={post.title}
          />
          <div className="posts-desc">{formatText(post.description, 350)}</div>
          <button className="btn-more" onClick={() => onClickReadMore(post)}>
            READ MORE
          </button>
        </div>
      </div>
  );
};

export default Card;
