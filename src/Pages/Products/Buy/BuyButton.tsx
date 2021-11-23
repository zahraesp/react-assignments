import React from "react";
import { Box, Button } from "@mui/material";
import { IData } from "../../../Interfaces/Iterface";
import "./Buy.css"

// interface IProps {
//   item: IData;
//   addToCart: (item: IData) => void;
// }

const BuyButtonItem = (props: any) => {
  const { item } = props;

  const clickHandler = () => {
   props.addToCart(item);
  }

  return (
    <Box className="buy-btn">
      <Button variant="contained" onClick={clickHandler}>
        {item.price}$
      </Button>
    </Box>
  );
};

export default BuyButtonItem;
