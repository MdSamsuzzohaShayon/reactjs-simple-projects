// https://www.youtube.com/watch?v=731Ur2HGRBY


import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
// import CartList from './cart-list';
import cartList from './cart-list';

function App() {
  console.log(cartList);
  return (
    <div className="App">
      <NavBar />
      <CartContainer cart={cartList} />
    </div>
  );
}

export default App;
