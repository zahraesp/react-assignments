import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const NewItem = (props: any) => {
  const { onSaveTodo } = props;
  const [enteredTodo, setEnteredTodo] = React.useState("");

  const submitHandler = (event: any) => {
    event.preventDefault();
    onSaveTodo(enteredTodo);
    setEnteredTodo("");
  };

  const changeHandler = (event: any) => {
    setEnteredTodo(event.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{ my: "20px", display: "flex" }}
    >
      <TextField
        required
        id="outlined-required"
        value={enteredTodo}
        onChange={changeHandler}
        size="small"
        sx={{flexGrow:1}}
      />
      <Button
        size="small"
        sx={{ py: "9px", ml: "10px" }}
        variant="contained"
        type="submit"
        onClick={submitHandler}
      >
        ADD
      </Button>
    </Box>
  );
};

export default NewItem;
