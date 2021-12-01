import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const EditModal = (props: any) => {
  const { post, editedPost } = props;
  const [enteredNewContent, setEnteredNewContent] = useState({
    id: null,
    title: "",
    body: "",
    userId: null,
  });

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    editedPost({ ...enteredNewContent, id: post.id, userId: post.userId });
    setOpen(false);
    setEnteredNewContent({ id: null, title: "", body: "", userId: null });
  };

  const titleChangeHandler = (event: any) => {
    setEnteredNewContent({ ...enteredNewContent, title: event.target.value });
  };

  const bodyChangeHandler = (event: any) => {
    setEnteredNewContent({ ...enteredNewContent, body: event.target.value });
  };

  return (
    <Box>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Post</DialogTitle>
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
    </Box>
  );
};

export default EditModal;
