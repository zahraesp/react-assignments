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
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { IPost } from "../../Interfaces/Interface";

interface IProps {
  post: IPost;
  editedPost: (post: IPost) => void;
  deletedPost: (post: IPost) => void;
  ReadMorePost: (post: IPost) => void;
}

const ButtonGroup = (props: IProps) => {
  const { post, editedPost, deletedPost, ReadMorePost } = props;
  const [enteredNewContent, setEnteredNewContent] = useState({
    id: null,
    title: "",
    body: "",
    userId: null,
  });


  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ReadMore = () => {
    ReadMorePost(post);
    navigate(`/posts/${post.id}`);
  };

  const handleEdit = () => {
    editedPost({ ...enteredNewContent, id: post.id, userId: post.userId });
    setOpen(false);
  };

  const handleDelete = () => {
    deletedPost(post);
    setOpen(false);
  };

  const titleChangeHandler = (event: any) => {
    setEnteredNewContent({ ...enteredNewContent, title: event.target.value });
  };

  const bodyChangeHandler = (event: any) => {
    setEnteredNewContent({ ...enteredNewContent, body: event.target.value });
  };

  return (
    <CardActions>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="dialog">Edit Post</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit Title</DialogContentText>
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
            onChange={titleChangeHandler}
            value={enteredNewContent.title}
          />
          <DialogContentText>Edit Body</DialogContentText>
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
            onChange={bodyChangeHandler}
            value={enteredNewContent.body}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEdit}>Ok</Button>
        </DialogActions>
      </Dialog>
      <Button size="small" onClick={handleDelete}>
        Delete
      </Button>
      <Button size="small" onClick={ReadMore}>
        Read More
      </Button>
    </CardActions>
  );
};

export default ButtonGroup;
