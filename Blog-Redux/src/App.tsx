import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout";
import MyRoutes from "./Routes/MyRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { currentUser } from "./State/Authentication/ActionCreators";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const Info: any = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(Info);
  useEffect(() => {
    dispatch(currentUser());
  }, []);
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
