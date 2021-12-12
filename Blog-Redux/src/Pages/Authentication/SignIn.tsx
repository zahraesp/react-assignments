import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signIn } from "../../State/Authentication/ActionCreators";
import { useStyle } from "./Styles";

const SignInComponent = () => {
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { Auth }: any = useSelector((state) => state);
  const email = useRef<any>();
  const password = useRef<any>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    try {
      await dispatch(signIn(email.current.value, password.current.value));
      navigation("/");
    } catch (error: any) {
      console.error(error);
      setLoading(false);
    }
  };

  if (!!Auth) {
    return <Navigate to={"/"} />;
  }
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Box className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            type="text"
            label="Email Address"
            name="email"
            inputRef={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={password}
          />
          {!!loading ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSubmit}
            >
              <CircularProgress size={24} />
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          )}
        </form>
        <Grid container>
          <Grid item>
            <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignInComponent;
