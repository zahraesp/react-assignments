import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Item from "./Item";
import Footer from "../Footer/Footer";

const DisplayList = (props: any) => {
  const { todoItem, saveComplete, saveDelete } = props;
  const [filterTodo, setFilterTodo] = React.useState("ALL");

  const completeHandler = (id: any) => {
    saveComplete(id);
  };

  const deleteHandler = (id: any) => {
    saveDelete(id);
  };

  const filterHandler = (value: any) => {
    setFilterTodo(value);
  };
  console.log(filterTodo);

  let display = "there is nothing to show!";

  if (filterTodo === "ALL") {
    console.log("here ALL");
    display = todoItem.map((item: any) => (
      <Item
        key={item.id}
        item={item}
        completeTodo={completeHandler}
        deleteTodo={deleteHandler}
      />
    ));
  } else if (filterTodo === "FINISHED") {
    display = todoItem.map((item: any) => {
      return (
        <Box>
          {item.completed === true ? (
            <Item
              key={item.id}
              item={item}
              completeTodo={completeHandler}
              deleteTodo={deleteHandler}
            />
          ) : null}
        </Box>
      );
    });
  } else if (filterTodo === "ACTIVE") {
    display = todoItem.map((item: any) => {
      return (
        <Box>
          {item.completed !== true ? (
            <Item
              key={item.id}
              item={item}
              completeTodo={completeHandler}
              deleteTodo={deleteHandler}
            />
          ) : (
            ""
          )}
        </Box>
      );
    });
  }
  return (
    <Box>
      <Box sx={{ color: "#46505A" }}>{display}</Box>
      <Footer filterList={filterHandler} />
    </Box>
  );
};

export default DisplayList;
