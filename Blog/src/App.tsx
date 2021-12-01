import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </PostProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
