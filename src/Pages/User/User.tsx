import { Box } from "@mui/material";
import React from "react";
import { Redirect } from "react-router-dom";
import Profile from "./Profile";

const User = (props: any) => {
  const { loginData, item, cartPrice } = props;
  console.log("user", item);

  const saveAddress = (enteredAddress: string) => {
    props.saveAddress(enteredAddress);
  };

  return (
    <Box>
      {!loginData.name ? (
        <Redirect to="/UserLogin" />
      ) : (
        <Profile item={item} loginData={loginData} cartPrice={cartPrice} saveAddress={saveAddress} />
      )}
    </Box>
  );
};

export default User;
