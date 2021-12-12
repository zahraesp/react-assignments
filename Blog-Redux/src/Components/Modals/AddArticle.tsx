import {
  Button,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { CreateArticle, GetByUid } from "../../State/Articles/ActionCreatores";
import { useStyle } from "../Styles";

const AddArticle = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const createArticle = bindActionCreators(CreateArticle, dispatch);
  const title = useRef<any>();
  const body = useRef<any>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    createArticle({ title: title.current.value, body: body.current.value });
    setOpen(false);
    dispatch(GetByUid());
  };

  return (
    <CardActions>
      <Button
        size="small"
        onClick={handleClickOpen}
        className={classes.button}
      >
        New Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="dialog">New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>New Title</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label=""
            type="text"
            fullWidth
            variant="standard"
            multiline
            sx={{ mb: "2rem" }}
            name="title"
            inputRef={title}
            autoComplete="current-title"
          />
          <DialogContentText>New Body</DialogContentText>
          <TextField
            margin="dense"
            id="body"
            label=""
            type="text"
            fullWidth
            variant="standard"
            multiline
            sx={{ mb: "2rem" }}
            name="body"
            inputRef={body}
            autoComplete="current-body"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Ok</Button>
        </DialogActions>
      </Dialog>
    </CardActions>
  );
};

export default AddArticle;
