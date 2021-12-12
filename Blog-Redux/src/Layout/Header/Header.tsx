import LogoutIcon from "@mui/icons-material/Logout";
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
import { Link } from "react-router-dom";
import LogoutModal from "../../Components/Modals/LogoutModal";
import { useStyle } from "../../Components/Styles";

const Header = () => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.container}>
      <Link to="/Articles">Articles</Link>
      <Box>
        <Box className="header__user">
          <IconButton
            className="header_iconButton"
            onClick={handleClick}
            size="small"
          >
            Hi
          </IconButton>
        </Box>
        <Menu
          className="header__menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem className={classes.list}>
            <Avatar className="avatar"/>
            <Button className={classes.button}>
              <Link to="/profile">Profile</Link>
            </Button>
          </MenuItem>
          <Divider />
          <MenuItem className={classes.list}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <LogoutModal />
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
