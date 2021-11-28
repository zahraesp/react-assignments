import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider";
import PostProvider from "./Contexts/PostProvider";
import Layout from "./Layout/Index";
import MyRoutes from "./Routes/MyRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostProvider>
            <Layout />
            <MyRoutes />
        </PostProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
