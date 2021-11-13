import { Box, Typography } from "@mui/material";
import React from "react";
import DisplayList from "./components/DisplayItems/DisplayList";
import NewItem from "./components/NewItem/NewItem";

const App = () => {
  const dummy_data = [
    {
      id: 1,
      text: "learn typescript",
      completed: false,
    },
    {
      id: 2,
      text: "learn react",
      completed: false,
    },
  ];

  const [todoData, setTodoData] = React.useState(dummy_data);

  const onSaveHandler = (enteredData: any) => {
    setTodoData((prevData: any) => {
      return [...prevData, { id: Math.random().toString(), text: enteredData }];
    });
  };

  const completeHandler = (id: any) => {
    let updateTodo = todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoData(updateTodo);
    console.log(todoData);
  };

  const deleteHandler = (id: any) => {
    let deleteTodo = todoData.filter((todo) => todo.id !== id);
    setTodoData(deleteTodo);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography variant="h3" sx={{ mb: "20px" }}>
        TODO LIST
      </Typography>
      <Box
        sx={{
          bgcolor: "#bcaccb",
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          width: 400,
        }}
      >
        <NewItem onSaveTodo={onSaveHandler} />
        <DisplayList
          todoItem={todoData}
          saveComplete={completeHandler}
          saveDelete={deleteHandler}
        />
      </Box>
    </Box>
  );
};

export default App;
