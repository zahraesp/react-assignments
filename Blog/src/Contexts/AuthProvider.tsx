import React, { createContext, useContext, useState } from "react";
import { IUser } from "../Interfaces/Interface";

const StorageContext = createContext({
  onLogin: () => {},
  onLogout: () => {},
  isLoggedIn: false,
});
const UserContext = createContext({});

export default function AuthProvider(props: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!window.localStorage.getItem("user") ? true : false
  );
  const [userData, setUserData] = useState<IUser>();

  const onLogin = () => {
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
  };

  const loginData = {
    onLogin,
    onLogout,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <StorageContext.Provider value={loginData}>
      {/* <UserContext.Provider value={{ userData, setUserData }}> */}
      {props.children}
      {/* </UserContext.Provider> */}
    </StorageContext.Provider>
  );
}

export const useAuth = () => {
  const loginData = useContext(StorageContext);
  return loginData;
};

export const useUser = () => {
  const userData = useContext(UserContext);
  return userData;
};
