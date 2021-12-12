import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../Services/firebaseService";
import { addUser } from "../User/ActionCreator";

export const signInSuccess = () => {
  return (dispatch: any) => {
    dispatch({
      type: "SIGN_IN_SUCCESS",
      currentUser: auth.currentUser?.toJSON(),
    });
  };
};

export const signUpSuccess = () => {
  return (dispatch: any) => {
    dispatch({
      type: "SIGN_UP_SUCCESS",
      currentUser: auth.currentUser?.toJSON(),
    });
  };
};

export const signOutSuccess = () => {
  return (dispatch: any) => {
    dispatch({
      type: "SIGN_OUT_SUCCESS",
    });
  };
};

export const signUp = (email: any, password: any) => async (dispatch: any) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    dispatch(signInSuccess());
    toast.success("Registration successful");
  } catch (error) {
    toast.error("Registration failed");

    console.log("Registration failed");
  }
};

export const signIn = (email: any, password: any) => async (dispatch: any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("sign in", auth.currentUser);
    dispatch(signUpSuccess());
    toast.success("Login successful");
  } catch (error) {
    toast.error("Login failed");
    console.log("Login failed");
  }
};

export const logout = () => async (dispatch: any) => {
  try {
    await signOut(auth);
    toast.success("You Are Logged out.");
    dispatch(signOutSuccess());
  } catch (error) {
    toast.error("Logout failed");
  }
};

export const currentUser = () => async (dispatch: any) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(auth.currentUser?.email);
        const userEmail = auth.currentUser?.email;
        dispatch(addUser(userEmail));
      } else {
        dispatch(addUser(null));
      }
    });
  } catch (error) {
    toast.error("No user found");
  }
};
