import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Config from "../Api/Config";
import { useAuth } from "../Contexts/AuthProvider";
import { IComment, IPost } from "../Interfaces/Interface";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import DisplayPosts from "../Pages/Posts/DisplayPosts";
import SinglePost from "../Pages/Posts/SinglePost";

const MyRoutes = () => {
  const Auth = useAuth();

  const [singlePost, setSinglePost] = useState<IPost>();

  const ReadMorePostHandler = (post: any) => {
    console.log(post);
    setSinglePost(post);
  };

  return (
    <Routes>
      {!!Auth.isLoggedIn ? (
        <Route>
          <Route
            path="/"
            element={<DisplayPosts ReadMorePost={ReadMorePostHandler} />}
          />
          <Route
            path="/posts"
            element={<DisplayPosts ReadMorePost={ReadMorePostHandler} />}
          ></Route>
          <Route path="/posts/:id" element={<SinglePost post={singlePost}/>} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/post"
            element={<DisplayPosts ReadMorePost={ReadMorePostHandler} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      ) : (
        <Route>
          <Route
            path="/"
            element={<DisplayPosts ReadMorePost={ReadMorePostHandler} />}
          />
          <Route
            path="/posts"
            element={<DisplayPosts ReadMorePost={ReadMorePostHandler} />}
          ></Route>
          <Route path="/posts/:id" element={<DisplayPosts ReadMorePost={ReadMorePostHandler} />} />
          <Route
            path="/post"
            element={<DisplayPosts ReadMorePost={ReadMorePostHandler} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      )}
    </Routes>
  );
};

export default MyRoutes;
