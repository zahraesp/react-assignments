import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "1rem",
  },
  form: {
    width: "100%",
    marginTop: "1rem",
  },

  button: {
    margin: "1rem 0",
  },
});
