import { getPosts } from "../services/PostService";
import { posts } from "../services/PostService";
import React, { useState } from "react";
import DisplayAllPost from "./DisplayAllPost";
import DisplaySinglePost from "./DisplaySinglePost";

import "./Posts.css";

const Posts = () => {
  const [post, setPost] = useState(null);
  const [singleBlog, setSingleBlog] = useState(false);

  const readMoreHandler = (post) => {
    setPost(post);
    setSingleBlog(true);
    console.log(post);
  };

  const goBackHandler = () => {
    setPost(null);
    setSingleBlog(false);
    console.log(post);
  };

  if (singleBlog == false) {
    return (
      <React.Fragment>
        {console.log(posts)}
        <div className="posts">
          {posts.map((post) => (
            <DisplayAllPost
              post={post}
              key={post.id}
              onClickReadMore={readMoreHandler}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
  else{
    return(
      <React.Fragment>
        <DisplaySinglePost post={post} onClickBack={goBackHandler}/>
      </React.Fragment>
    )
  }
};

export default Posts;
