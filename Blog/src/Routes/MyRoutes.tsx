import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import DisplayPosts from "../Pages/Posts/DisplayPosts/DisplayPosts";
import SinglePost from "../Pages/Posts/SinglePost/SinglePost";
import Profile from "../Pages/Profile/Profile";

const MyRoutes = () => {
  const Auth = useAuth();
  return (
    <Routes>
      {!!Auth.isLoggedIn ? (
        <Route>
          <Route path="/" element={<DisplayPosts />} />
          <Route path="/posts" element={<DisplayPosts />}></Route>
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<DisplayPosts />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      ) : (
        <Route>
          <Route path="/" element={<DisplayPosts />} />
          <Route path="/posts" element={<DisplayPosts />}></Route>
          <Route path="/posts/:id" element={<DisplayPosts />} />
          <Route path="/post" element={<DisplayPosts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<DisplayPosts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      )}
    </Routes>
  );
};

export default MyRoutes;
