import { Box, Button } from "@mui/material";
import React from "react";

const Footer = (props: any) => {
  const { filterList } = props;

  const filterClick = (event: any) => {
    filterList(event.target.value);
  };

  return (
    <Box sx={{ pt: 3 }}>
      <Button
        sx={{ minWidth: "50px", mr: 1 }}
        size="small"
        onClick={filterClick}
        value="ALL"
      >
        All
      </Button>
      <Button
        sx={{ minWidth: "60px", mr: 1 }}
        size="small"
        onClick={filterClick}
        value="FINISHED"
      >
        Finished
      </Button>
      <Button
        sx={{ minWidth: "60px"}}
        size="small"
        onClick={filterClick}
        value="ACTIVE"
      >
        active
      </Button>
    </Box>
  );
};

export default Footer;
