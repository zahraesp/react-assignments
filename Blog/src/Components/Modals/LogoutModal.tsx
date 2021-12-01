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

const LogoutModal = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <Box>
      <Button onClick={handleClickOpen}>Logout</Button>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "50%",
            maxWidth: "500px",
            minWidth: "250px",
            p: "2rem 0 0 2rem",
          }}
        >
          <DialogTitle sx={{ p: "0 0 1rem 0" }}>logout</DialogTitle>
          <DialogContentText sx={{ pb: "1rem" }}>
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
