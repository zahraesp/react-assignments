import { Box, Typography } from "@mui/material";
import React from "react";

const Profile = (props: any) => {
  const { loginData, item, cartPrice } = props;

  //let updatedItems = item.splice(1, item.length);

  let totalPrice = cartPrice.reduce(
    (prevScore: number, currrentScore: number, index: number) =>
      prevScore + currrentScore,
    0
  );

  return (
    <Box sx={{ ml: ".5rem" , mt:"2rem" }}>
      <Box sx={{mb:"1rem"}}>
        <Typography variant="h4"> {loginData.name}</Typography>
        <Typography variant="h5"> {loginData.email}</Typography>
      </Box>

      <Typography variant="body1"> total price: {totalPrice}$ </Typography>
      {/* <UserLogout loginData={loginData} /> */}
    </Box>
  );
};

export default Profile;
