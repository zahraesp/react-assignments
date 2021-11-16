import { Typography } from "@mui/material";
import React from "react";
import Gallery from "./Gallery";

const Sample = (props: any) => {
  const { searchText } = props;
  return (
    <div>
      <Typography sx={{textAlign:"center", fontSize:"1.5rem", mb:"4rem"}}>{searchText} Images!!</Typography>
      <Gallery searchText={searchText} />
    </div>
  );
};

export default Sample;
