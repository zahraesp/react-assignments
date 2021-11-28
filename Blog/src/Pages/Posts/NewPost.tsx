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

interface IProps {
  addPost: (post: any) => void;
}

const NewPost = (props: IProps) => {
  const { addPost } = props;

  const [open, setOpen] = useState(false);
  const [newContent, setNewContent] = useState({
    title: "",
    body: "",
  });
  //const { postsContext }: any = usePost();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bodyChangeHandler = (event: any) => {
    setNewContent({ ...newContent, body: event.target.value });
  };

  const titleChangeHandler = (event: any) => {
    setNewContent({ ...newContent, title: event.target.value });
  };

  const handleAdd = () => {
    addPost(newContent);
    setOpen(false);
  };

  return (
    <CardActions>
      <Button size="small" onClick={handleClickOpen}>
        New Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="dialog">Edit Post</DialogTitle>
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
            onChange={titleChangeHandler}
            value={newContent.title}
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
            onChange={bodyChangeHandler}
            value={newContent.body}
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

export default NewPost;
