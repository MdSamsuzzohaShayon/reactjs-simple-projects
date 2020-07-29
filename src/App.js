// https://www.youtube.com/watch?v=731Ur2HGRBY


import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
// import CartList from './cart-list';
import cartList from './cart-list';


import {createStore} from "redux";


const initialStore = {
  count: 78
};

// REDUCER
function reducer(state, action){
  console.log({state, action});
  if(action.type === "DECREASE"){
    return {count: state.count- 1}
  }
  if(action.type === "INCREASE"){
    return {count: state.count + 1}
  }
  if(action.type === "RESET"){
    return {count: 0}
  }
  return state;
}

const store = createStore(reducer, initialStore);
store.dispatch({type:"DECREASE"});
store.dispatch({type:"INCREASE"});
store.dispatch({type:"RESET"});



console.log("getState()",store.getState());



function App() {
  console.log(cartList);
  return (
    <div className="App">
      <NavBar  cart={store.getState()} />
      <CartContainer cart={cartList} />
    </div>
  );
}

export default App;
