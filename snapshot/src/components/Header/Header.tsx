import { Typography } from "@mui/material";
import React from "react";
import Options from "./Navigation/Options";
import SearchForm from "./SearchForm";

const Header = (props: any) => {
  const { history, searchSubmit } = props;
  console.log(props);
  return (
    <div>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "500",
          
          mb: "5rem",
        }}
      >
        SnapShot
      </Typography>
      <SearchForm history={props.history} searchSubmit={searchSubmit} />
      <Options />
    </div>
  );
};

export default Header;
