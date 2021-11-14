import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const NewItem = (props: any) => {
  const { onSaveTodo, editTodo, onEditTodo } = props;
  const [enteredTodo, setEnteredTodo] = React.useState("");
  const inputElement = React.useRef<any>(null);

  React.useEffect(() => {
    if (inputElement.current) {
      inputElement?.current?.focus?.();
    }
  });

  const submitHandler = (event: any) => {
    event.preventDefault();
    onSaveTodo(enteredTodo);
    setEnteredTodo("");
  };

  const changeHandler = (event: any) => {
    setEnteredTodo(event.target.value);
  };

  const editHandler = (event: any) => {
    event.preventDefault();
    onEditTodo(enteredTodo);
    setEnteredTodo("");
  };

  return (
    <Box>
      {editTodo == null ? (
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
            sx={{ flexGrow: 1 }}
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
      ) : (
        <Box
          component="form"
          onSubmit={editHandler}
          sx={{ my: "20px", display: "flex" }}
        >
          <TextField
            required
            id="outlined-required"
            value={enteredTodo}
            placeholder={editTodo.text}
            onChange={changeHandler}
            size="small"
            sx={{ flexGrow: 1 }}
            ref={inputElement}
            autoFocus
          />
          <Button
            size="small"
            sx={{ py: "9px", ml: "10px" }}
            variant="contained"
            type="submit"
            onClick={editHandler}
          >
            EDIT
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default NewItem;
