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
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { EditArticle, GetByUid } from "../../State/Articles/ActionCreatores";

const EditModal = (props: any) => {
  const { item } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const title = useRef<any>();
  const body = useRef<any>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    dispatch(
      EditArticle({
        title: title.current.value,
        body: body.current.value,
        id: item.id,
        userId: item.userId,
      })
    );
    dispatch(GetByUid());
    setOpen(false);
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
            defaultValue={item.title}
            inputRef={title}
            autoComplete="current-title"
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
            defaultValue={item.body}
            inputRef={body}
            autoComplete="current-body"
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
