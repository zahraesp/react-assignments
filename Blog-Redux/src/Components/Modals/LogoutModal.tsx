import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../../State/Authentication/ActionCreators";
import { useDispatch } from "react-redux";
import { useStyle } from "../Styles";

const LogoutModal = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/SignIn");
  };

  return (
    <Box>
      <Button onClick={handleClickOpen} className={classes.button}>
        Logout
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box className={classes.logout_container}>
          <DialogTitle className="dialog__title">logout</DialogTitle>
          <DialogContentText className="dialog__contentText">
            Are You Sure To Exit?
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleLogout}>Ok</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default LogoutModal;
