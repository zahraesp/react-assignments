import React from "react";

import "./Styles.css";

const Post = (props) => {
  const { post, onClickBack } = props;
  return (
      <div className="post-item">
        <div className="post-item__title"><h1>{post.title}</h1></div>
        <div className="post-item__author"> <p>by: </p> {post.author}</div>
        {/* <div className=""> <p>date: </p> {post.created}</div> */}

        <img
          className="post-item__image"
          src={require("../../Service/PostImages/" + post.cover).default}
          alt={post.title}
          />
        <div className="post-item__desc"> <p>{post.description}</p></div>
        <div className="post-item__body"> <p>{post.body}</p></div>
        <button className="post-item__button" onClick={() => onClickBack()}>BACK TO LIST</button>
      </div>
  );
};

export default Post;
