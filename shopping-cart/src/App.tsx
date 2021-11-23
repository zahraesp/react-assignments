import React from 'react';
import Header from './Header/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from './User/User';
import ItemList from './DisplayProduct/ItemList/ItemList';
import UserLogin from './User/UserLogin';
import data from './Services/data';

const App = () => {
  const [loginData, setLoginData] = React.useState({});
  const [cartItem, setCartItem] = React.useState([{}]);
  const [cartPrice, setCartPrice] = React.useState([0]);


  const loginHandler = (dataLogin: any) => {
    console.log(dataLogin);
    setLoginData(dataLogin)
  }

  const addToCart = (item: any) => {
    setCartItem((prevItem: any) => {
      return [...prevItem, { item }]
    });
    setCartPrice((prevPrice: number[]) => {
      return [...prevPrice, item.price]
    })
  }

  return (
    <BrowserRouter>
      <Header loginData={loginData} count={cartItem.length} />
      <Switch>
        <Route exact path="/" render={() => <ItemList loginData={loginData} addToCart={addToCart} data={data} />}></Route>
        <Route path="/UserLogin" render={() => <UserLogin dataLogin={loginHandler} />}></Route>
        <Route path="/User" render={() => <User loginData={loginData} item={cartItem} cartPrice={cartPrice} />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
