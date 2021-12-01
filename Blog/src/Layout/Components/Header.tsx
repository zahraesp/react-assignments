import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Header.css";
import LogoutModal from "../../Components/Modals/LogoutModal";

const Header = () => {
  const loginData = useAuth();
  const item = window.localStorage.getItem("user");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const goProfile = () => {
    navigate("/profile");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0e101c;",
        height: "4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "1rem",
        mb: "1rem",
      }}
    >
      <Link to="/">BLOG</Link>
      {loginData.isLoggedIn !== false && item !== null ? (
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{
                ml: 0,
                color: "#9496a1",
                fontSize: "1rem",
                textTransform: "none",
              }}
            >
              {JSON.parse(item).username}
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
           onClose={handleClose}
            //onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar />
              <Button onClick={goProfile}>
                <Link to="/profile">Profile</Link>
              </Button>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>          
              <LogoutModal />
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Link to="/login">login</Link>
      )}
    </Box>
  );
};

export default Header;
