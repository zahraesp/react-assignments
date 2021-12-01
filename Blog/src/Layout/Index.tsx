import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Components/Header";

const Index = () => {
  const currentLocation = useLocation().pathname;
  return <div>{currentLocation !== "/login" ? <Header /> : null}</div>;
};

export default Index;
