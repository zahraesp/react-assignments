import React from "react";
import { Route, Routes } from "react-router-dom";
import Articles from "../Pages/Articles/Articles";
import SignIn from "../Pages/Authentication/SignIn";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/Authentication/SignUp";

const MyRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/Articles" element={<Articles />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
};

export default MyRoutes;
