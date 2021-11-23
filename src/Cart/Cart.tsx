import React from "react";
import { Box, Typography } from "@mui/material";
import { IData } from "../Interfaces/Iterface";
import ProductList from "../Pages/Products/ProductList";
import Order from "./Order";

const Cart = (props: any) => {
  const { cartPrice, item, loginData } = props;

  let totalPrice = cartPrice.reduce(
    (prevScore: number, currrentScore: number, index: number) =>
      prevScore + currrentScore,
    0
  );
  const addToCart = (item: IData) => {
    totalPrice += item.price;
  };

  const result = Object.values(
    item.reduce((val: any, item: any) => {
      val[item.id] = item;
      return val;
    }, {})
  );

  console.log(result);

  const saveAddress = (enteredAddress: string) => {
    props.saveAddress(enteredAddress);
  };

  return (
    <Box>
      {Object.keys(item).length > 0 && (
        <ProductList
          loginData={loginData}
          addToCart={addToCart}
          data={result}
        />
      )}

      <Typography sx={{ mt: "2rem" }} variant="body1">
        total price: {totalPrice}$
      </Typography>

      <Order saveAddress={saveAddress} />
    </Box>
  );
};

export default Cart;
