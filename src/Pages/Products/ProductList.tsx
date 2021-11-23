import React from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import ItemCart from "./ProductItem";
import "./DisplayProduct.css";
import { IData } from "../../Interfaces/Iterface";

// interface IProps {
//   loginData: IUser;
//   data: IData[];
// }

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductList = (props: any) => {
  const { loginData, data } = props;

  const addToCart = (item:any) => {
    props.addToCart(item);
  };

  return (
    <Box sx={{ mt: "5rem" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item: IData) => (
          <Grid className="card" item xs={4} sm={4} md={4} key={item.id}>
            <Item>
              <ItemCart
                key={item.id}
                item={item}
                loginData={loginData}
                addToCart={addToCart}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
