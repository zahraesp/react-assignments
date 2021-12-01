import React, { createContext, useContext, useState } from "react";

const StorageContext = createContext({
  onLogin: () => {},
  onLogout: () => {},
  isLoggedIn: false,
});

export default function AuthProvider(props: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!window.localStorage.getItem("user") ? true : false
  );

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
      {props.children}
    </StorageContext.Provider>
  );
}

export const useAuth = () => {
  const loginData = useContext(StorageContext);
  return loginData;
};
