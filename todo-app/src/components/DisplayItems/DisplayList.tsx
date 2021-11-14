import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Item from "./Item";

const DisplayList = (props: any) => {
  const {
    todoItem,
    saveComplete,
    saveDelete,
    saveEdit,
    filterFlag,
    finishMode,
    activeMode,
  } = props;

  const completeHandler = (id: any) => {
    saveComplete(id);
  };

  const deleteHandler = (id: any) => {
    saveDelete(id);
  };

  const editHandler = (id: any) => {
    saveEdit(id);
  };

  return (
    <Box>
      <Box sx={{ color: "#46505A" }}>
        {filterFlag === "FINISHED"
          ? finishMode.map((item: any) => (
              <Item
                key={item.id}
                item={item}
                completeTodo={completeHandler}
                deleteTodo={deleteHandler}
                editTodo={editHandler}
              />
            ))
          : filterFlag === "ACTIVE"
          ? activeMode.map((item: any) => (
              <Item
                key={item.id}
                item={item}
                completeTodo={completeHandler}
                deleteTodo={deleteHandler}
                editTodo={editHandler}
              />
            ))
          : todoItem.map((item: any) => (
              <Item
                key={item.id}
                item={item}
                completeTodo={completeHandler}
                deleteTodo={deleteHandler}
                editTodo={editHandler}
              />
            ))}
      </Box>
    </Box>
  );
};

export default DisplayList;
