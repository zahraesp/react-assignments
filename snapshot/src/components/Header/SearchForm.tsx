import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchForm = (props: any) => {
  console.log(props);

  const { searchSubmit, history } = props;
  const [input, setInput] = React.useState("");

  const changeHandler = (event: any) => {
    setInput(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    searchSubmit(history, input);
    setInput("");
  };
  return (
    <Box
      sx={{ width: "60%", display: "flex", margin: "0 auto" }}
      component="form"
      action="submit"
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        value={input}
        onChange={changeHandler}
        size="small"
        sx={{ flexGrow: 1 }}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon type="submit" onClick={submitHandler} />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

export default SearchForm;
