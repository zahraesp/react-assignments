import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ITodo } from "../../Interfaces/Interface";
import EditIcon from "@mui/icons-material/Edit";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface IProps {
  todo: ITodo | any;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number) => void;
}

const TodoItem = (props: IProps) => {
  const { todo, completeTodo, deleteTodo, editTodo } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" , alignItems:"center", flexWrap:"wrap"}}>
        <Checkbox
          checked={!!todo.completed}
          {...label}
          onClick={() => completeTodo(todo.id)}
        />
        <Typography sx={{ display: "inline-block" , pl:"9px"}}>{todo.title}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <IconButton
          onClick={() => deleteTodo(todo.id)}
          color="error"
          component="span"
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          onClick={() => editTodo(todo.id)}
          color="primary"
          component="span"
        >
          <EditIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoItem;
