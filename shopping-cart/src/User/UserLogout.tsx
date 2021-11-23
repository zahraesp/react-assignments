import React from "react";
import { Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const UserLogout = (props: any) => {

  const url = useHistory();

  const clickHandler = () => {
    url.push("/");
    localStorage.removeItem("myData");
    localStorage.clear();
  };

  return (
    <Box>
      <Button variant="contained" onClick={clickHandler}>
        logout
      </Button>
    </Box>
  );
};

export default UserLogout;
