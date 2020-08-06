// https://www.youtube.com/watch?v=731Ur2HGRBY

// time - 147m done

import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
// import CartList from './cart-list';
import cartList from './cart-list';


import { createStore } from "redux";
import reducer from './redux/reducer';


const initialState = {
  cart: cartList,
  total: 105,
  amount: 5
};



const store = createStore(reducer, initialState);




function App() {
  console.log("Cart List: ", cartList);
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar  />
        <CartContainer />
      </div>
    </Provider>
  );
}

export default App;
