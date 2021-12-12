import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header/Header";

const Layout = () => {
  const { Auth }: any = useSelector((state) => state);
  return (
    <Box>
      {!!Auth ? <Header /> : null }
    </Box>
  );
};

export default Layout;
