import React from "react";
import { Box, Button, TextField } from "@mui/material";
import {  useHistory } from "react-router-dom";

const Order = (props: any) => {
  const [addressField, setAddressField] = React.useState("");

  const url = useHistory();

  const handleChange = (event: any) => {
    setAddressField(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.saveAddress(addressField);
    url.push("/checkout");
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { my: "1rem", width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <TextField
        sx={{ display: "block" }}
        id="outlined-multiline-flexible"
        label="Address"
        multiline
        maxRows={5}
        value={addressField}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={submitHandler}>
        Checkout
      </Button>
    </Box>
  );
};

export default Order;
