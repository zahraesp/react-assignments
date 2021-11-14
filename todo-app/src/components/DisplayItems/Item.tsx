import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./Item.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Item = (props: any) => {
  const { item, completeTodo, deleteTodo, editTodo } = props;

  return (
    <Box>
      {item.text !== "" ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Checkbox {...label} onClick={() => completeTodo(item.id)} />

            <Typography
              className={!!item.completed ? "completed" : " "}
              sx={{ display: "inline-block" }}
            >
              {item.text}
            </Typography>
          </Box>

          <Box>
            <IconButton
              onClick={() => editTodo(item.id)}
              color="primary"
              component="span"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => deleteTodo(item.id)}
              color="error"
              component="span"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default Item;
