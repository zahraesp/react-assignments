import { Box, Typography } from "@mui/material";
import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";
import DisplayList from "./components/DisplayItems/DisplayList";
import Footer from "./components/Footer/Footer";
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
  const [edit, setEdit] = React.useState({ id: -1, text: "" });
  const [isEdit, setIsEdit] = React.useState(false);
  const [filterTodo, setFilterTodo] = React.useState("");
  const [activeTodo, setActiveTodo] = React.useState({});
  const [finishTodo, setFinishTodo] = React.useState({});

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
  };

  const deleteHandler = (id: any) => {
    let deleteTodo = todoData.filter((todo) => todo.id !== id);
    setTodoData(deleteTodo);
  };

  const editHandler = (id: any) => {
    let index = -1;
    let value = "";
    todoData.map((todo) => {
      if (todo.id === id) {
        index = todo.id;
        value = todo.text;
        console.log(index);
      }
      return todo;
    });
    setEdit({ id: index, text: value });
    setIsEdit(true);
  };

  const saveEditTodo = (enteredData: any) => {
    let updateTodo = todoData.map((todo) => {
      if (todo.id === edit.id) {
        todo.text = enteredData;
      }
      return todo;
    });
    setTodoData(updateTodo);
    setIsEdit(false);
    setEdit({ id: -1, text: "" });
  };

  const filterHandler = (value: any) => {
    setFilterTodo(value);
    if (value === "FINISHED") {
      let filteredTodo = todoData.filter((todo) => todo.completed === true);
      setFinishTodo(filteredTodo);
    }
    if (value === "ACTIVE") {
      let filteredTodo = todoData.filter((todo) => todo.completed != true);
      setActiveTodo(filteredTodo);
    }
    if (value === "ALL") {
      let filteredTodo = todoData.filter((todo) => todo.text != "");
      setTodoData(filteredTodo);
    }
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
        {isEdit === false ? (
          <NewItem onSaveTodo={onSaveHandler} editTodo={null} />
        ) : (
          <NewItem onEditTodo={saveEditTodo} editTodo={edit} />
        )}
        <DisplayList
          todoItem={todoData}
          saveComplete={completeHandler}
          saveDelete={deleteHandler}
          saveEdit={editHandler}
          filterFlag={filterTodo}
          activeMode={activeTodo}
          finishMode={finishTodo}
        />
        <Footer filterList={filterHandler} />
      </Box>
    </Box>
  );
};

export default App;
