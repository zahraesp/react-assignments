import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../State/Authentication/ActionCreators";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
import { useStyle } from "./Styles";

const SignUp = () => {
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const email = useRef<any>();
  const password = useRef<any>();
  const { User }: any = useSelector((state) => state);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    try {
      await dispatch(signUp(email.current.value, password.current.value));
      navigation("/");
    } catch (error: any) {
      console.error(error);
      setLoading(false);
    }
  };

  // if (!!Auth) {
  //   return <Navigate to="/" />;
  // }

  console.log(User);

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      {!User ? (
        <Box className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
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
                <CircularProgress size={24} color="secondary" />
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
                Sign Up
              </Button>
            )}
          </form>
          <Grid container>
            <Grid item>
              <Link to="/SignIn">{"Do you have an account? Sign In"}</Link>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Navigate to="/" />
      )}
    </Container>
  );
};

export default SignUp;
