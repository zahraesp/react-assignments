import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", height:"100vh" }}
    >
      <Typography variant="h3">There is nothing here</Typography>
    </Box>
  );
};

export default NotFound;
