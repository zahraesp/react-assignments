import React from "react";
import Header from "./Layout/Header/Header";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import data from "./Services/data";
import User from "./Pages/User/User";
import ProductList from "./Pages/Products/ProductList";
import UserLogin from "./Pages/Login/UserLogin";
import Checkout from "./Pages/Checkout";
import { IData, IUser } from "./Interfaces/Iterface";

const App = () => {
  const [loginData, setLoginData] = React.useState({ name: "", email: "" });
  const [cartItem, setCartItem] = React.useState([
    { id: null, title: "", desc: "", price: null, image: "" },
  ]);
  const [cartPrice, setCartPrice] = React.useState([0]);
  const [update, setUpdate] = React.useState([{}]);
  const [address, setAddress] = React.useState("");
  const [userLogin, setUserLogin] = React.useState({});

  React.useEffect(() => {
    let updatedItems = cartItem.filter((item) => item.id !== null);
    setUpdate(updatedItems);
  }, [cartItem]);

  const loginHandler = (dataLogin: IUser) => {
    setLoginData(dataLogin);
    setUserLogin(dataLogin);
  };

  const addToCart = (item: IData) => {
    setCartItem((prevItem: any) => {
      return [
        ...prevItem,
        {
          id: item.id,
          title: item.title,
          desc: item.desc,
          price: item.price,
          image: item.image,
        },
      ];
    });
    setCartPrice((prevPrice: number[]) => {
      return [...prevPrice, item.price];
    });
  };

  const saveAddress = (enteredAddress: any) => {
    setAddress(enteredAddress);
    setLoginData({ name: "", email: "" });
  };

  console.log("app", update);

  return (
    <BrowserRouter>
      <Header loginData={loginData} count={cartItem.length} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ProductList
              loginData={loginData}
              addToCart={addToCart}
              data={data}
            />
          )}
        ></Route>
        <Route
          path="/UserLogin"
          render={() => <UserLogin dataLogin={loginHandler} />}
        ></Route>
        <Route
          path="/User"
          render={() => (
            <User
              loginData={loginData}
              item={update}
              cartPrice={cartPrice}
              saveAddress={saveAddress}
            />
          )}
        ></Route>
        {Object.keys(userLogin).length < 1 ? (
          <Route path="/Checkout" render={() => <Redirect to="/" />}></Route>
        ) : (
          <Route
            path="/Checkout"
            render={() => <Checkout loginData={userLogin} address={address} item={update} cartPrice={cartPrice}/>}
          ></Route>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
