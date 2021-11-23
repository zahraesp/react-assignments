import { Box } from "@mui/material";
import React from "react";

const OptionItem = (props: any) => {
  const { item } = props;
  return (
    <Box>
      <li>{item}</li>
    </Box>
  );
};

export default OptionItem;
