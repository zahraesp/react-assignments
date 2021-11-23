import { Box, Typography } from "@mui/material";
import { IData } from "../Interfaces/Iterface";

const Checkout = (props: any) => {
  const { loginData, address, item, cartPrice } = props;

  let totalPrice = cartPrice.reduce(
    (prevScore: number, currrentScore: number, index: number) =>
      prevScore + currrentScore,
    0
  );

  return (
    <Box sx={{ ml: "1rem" }}>
      <Box sx={{ my: "1rem" }}>
        <Typography variant="h5">Name: </Typography>
        <Typography variant="body1">{loginData.name}</Typography>
      </Box>
      <Box sx={{ my: "1rem" }}>
        <Typography variant="h5">Email: </Typography>
        <Typography variant="body1">{loginData.email}</Typography>
      </Box>
      <Box sx={{ my: "1rem" }}>
        <Typography variant="h5">Address:</Typography>
        <Typography variant="body1">{address}</Typography>
      </Box>

      <Box sx={{ my: "1rem" }}>
        <Typography variant="h5">Products purchased:</Typography>
        <Typography sx={{ my: "1rem" }} variant="body1">
          {item.map((item: IData) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </Typography>
      </Box>
      <Typography variant="h5">Total Price:</Typography>
      <Typography variant="body1">{totalPrice}$</Typography>
    </Box>
  );
};

export default Checkout;
