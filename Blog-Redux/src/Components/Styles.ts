import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  button: {
    backgroundColor: "transparent",
    color: "#6c6f74db",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:selected": {
      backgroundColor: "transparent",
    },
  },
  container: {
    backgroundColor: "#0e101c;",
    height: "4rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
    marginBottom: "1rem",
    "& .header__user": {
      display: "flex",
      alignItems: "center",
      textAlign: "center",

      "& .header_iconButton": {
        marginLeft: 0,
        color: "#9496a1",
        fontSize: "1rem",
        textTransform: "none",
      },
    },
    "& .header__menu": {
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
      "& .menu__item": {
        backgroundColor: "transparent",
        color: "#6c6f74db",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  },
  list: {
    backgroundColor: "transparent",
    color: "#6c6f74db",
    "&:hover": {
      backgroundColor: "transparent",
    },

    "& .avatar": {
      width: " 30px",
      height: "30px",
    },
  },

  logout_container: {
    width: "50%",
    maxWidth: "500px",
    minWidth: "250px",
    padding: "2rem 0 0 2rem",

    "& .dialog__title": {
      padding: "0 0 1rem 0",
    },
    "& .dialog__contentText": {
      paddingBottom: "1rem",
    },
  },
});
