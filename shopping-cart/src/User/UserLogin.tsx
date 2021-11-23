import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Redirect } from "react-router-dom";


const UserLogin = (props: any) => {
    const [userName, setUserName] = React.useState("");
    const [userEmail, setUserEmail] = React.useState("");

    const [isLogin, setIsLogin] = React.useState(false);

    const nameChangeHandler = (event: any) => {
        setUserName(event.target.value);
    };

    const emailChangeHandler = (event: any) => {
        setUserEmail(event.target.value);
    };

    if(!!isLogin){
        return  <Redirect to="/"/>
    }

    const submitHandler = (event: any) => {
        setIsLogin(true);
        event.preventDefault();
        const enteredData = {
            name: userName,
            email: userEmail,
        }
        console.log("use state set login", isLogin);
        props.dataLogin(enteredData);
        setUserEmail("");
        setUserName("");
        localStorage.setItem('myData', enteredData.name);
    };

    return (
        <Box
            component="form"
            sx={{ mt: "2rem", ml: "1rem" }}
            onSubmit={submitHandler}
        >
            <TextField
                sx={{ display: "block", mb: "1rem" }}
                onChange={nameChangeHandler}
                required
                size="small"
                id="outlined-name"
                label="Name"
                variant="outlined"
                value={userName}
            />
            <TextField
                sx={{ display: "block", mb: "1rem" }}
                onChange={emailChangeHandler}
                required
                size="small"
                id="outlined-email"
                label="Email"
                variant="outlined"
                value={userEmail}
            />
            <Button
                className="login-btn"
                variant="contained"
                type="submit"
                onClick={submitHandler}
            >
                LOGIN
            </Button>
        </Box>
    );
};

export default UserLogin;
