import React from "react";
import { Box, Typography } from "@mui/material";
import OptionList from "../OptionList/OptionList";
import "../DisplayProduct.css";
import BuyButtonItem from "../../buy/BuyButtonItem";

// interface IProps {
//   item: IData;
//   loginData: IUser;
//   addToCart: (item: IData) => void;
// }

const ItemCart = (props: any) => {
  const { item, loginData } = props;


  const addToCart = (item:any) => {
    props.addToCart(item);
  };

  return (
    <Box className="product__card">
      <Box className="product__image-card">
        <img
          className="product__image"
          src={require("../../Services/images/" + item.image).default}
          alt={item.title}
        />
      </Box>
      <Box className="product__text">
        <Typography
          sx={{ fontSize: "1.5rem", mb: ".5rem" }}
          className="product__text--title"
        >
          {" "}
          {item.title}
        </Typography>
        <OptionList key={item.id} item={item.desc} />
        {!!loginData.name ? (
          <BuyButtonItem item={item} addToCart={addToCart} />
        ) : null}
      </Box>
    </Box>
  );
};

export default ItemCart;
