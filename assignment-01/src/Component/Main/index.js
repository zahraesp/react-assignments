import { posts } from "../../Service/PostService";
import React, { useState } from "react";
import Card from "../Card";
import Post from "../Post";

import "./Styles.css";

const Main = () => {
  const [post, setPost] = useState(null);

  const readMoreHandler = (post) => {
    setPost(post);
  };

  const goBackHandler = () => {
    setPost(null);
  };

  if (!post) {
    return (
        <div className="posts">
          {posts.map((post) => (
            <Card
              post={post}
              key={post.id}
              onClickReadMore={readMoreHandler}
            />
          ))}
        </div>
    );
  }
  else{
    return(
        <Post post={post} onClickBack={goBackHandler}/>
    )
  }
};

export default Main;
