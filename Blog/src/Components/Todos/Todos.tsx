import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Config from "../../Api/Config";
import { ITodo } from "../../Interfaces/Interface";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<ITodo[]>([]);

  let userIndex = "1";
  const item = window.localStorage.getItem("user");
  if (item !== null) {
    userIndex = JSON.parse(item).id;
  }

  const onCompleteHandle = (id: number) => {
    let updatedTodo = todos.map((todo: ITodo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };
  const onEditHandle = () => {};
  const onDeleteHandle = (id: number) => {
    let updatedTodo = todos.filter((todo: ITodo) => todo.id !== id);
    setTodos(updatedTodo);
  };

  useEffect(() => {
    async function getTodos() {
      try {
        const result = await Config.get(`users/${parseInt(userIndex)}/todos`);
        setIsLoading(false);
        setTodos(result.data);
        console.log("GET Todos:", result.data);
      } catch (error) {
        toast("Something Was Wrong!!");
      }
    }
    getTodos();
  }, [userIndex]);

  return (
    <Box>
      {!!isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          {todos.map((todo: ITodo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              completeTodo={onCompleteHandle}
              deleteTodo={onDeleteHandle}
              editTodo={onEditHandle}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Todos;
