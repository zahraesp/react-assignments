import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Options.css";

const Options = (props: any) => {
  return (
    <Box>
      <ul className="group-list">
        <li >
          <Link to={`/Gallery/sea`}>sea</Link>
        </li>
        <li>
          <Link to={`/Gallery/sky`}> sky </Link>
        </li>
        <li>
          <Link to={`/Gallery/sun`}> sun </Link>
        </li>
        <li>
          <Link to={`/Gallery/mountain`}> mountain </Link>
        </li>
      </ul>
    </Box>
  );
};

export default Options;
