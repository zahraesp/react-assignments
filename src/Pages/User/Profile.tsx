import React from "react";
import { Box, Typography } from "@mui/material";
import Cart from "../../Cart/Cart";

const Profile = (props: any) => {
  const { loginData, item, cartPrice } = props;

  const saveAddress = (enteredAddress: string) => {
    props.saveAddress(enteredAddress);
  };

  console.log("profile", item);

  return (
    <Box sx={{ ml: ".5rem", mt: "2rem" }}>
      <Box sx={{ mb: "1rem" }}>
        <Typography variant="h4"> {loginData.name}</Typography>
        <Typography variant="h5"> {loginData.email}</Typography>
      </Box>
      <Cart
        cartPrice={cartPrice}
        item={item}
        loginData={loginData}
        saveAddress={saveAddress}
      ></Cart>
      {/* <UserLogout loginData={loginData} /> */}
    </Box>
  );
};

export default Profile;
