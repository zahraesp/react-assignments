import React from "react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { IUser } from "../../Interfaces/Interface";
import "./styles.css";
import { useAuth } from "../../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const authLogin = useAuth();

  let navigate = useNavigate();

  const onSubmit = (data: IUser) => {
    authLogin.onLogin();
    window.localStorage.setItem(
      "user",
      JSON.stringify({
        name: data.name,
        email: data.email,
        username: data.username,
        id: Math.floor(Math.random() * 10 + 1).toString(),
      })
    );
    navigate("/");
  };

  return (
    <Box className="body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          {...register("name", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.name?.type === "required" && <p>This field is required</p>}
        {errors?.name?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.name?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors?.email?.type === "required" && <p>This field is required</p>}
        {errors?.email?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>UserName</label>
        <input
          {...register("username", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.username?.type === "required" && <p>This field is required</p>}
        {errors?.username?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.username?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <input type="submit" />
      </form>
    </Box>
  );
};

export default Login;
