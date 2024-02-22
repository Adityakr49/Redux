import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// items
// import cartItems from "./cart-items";


// redux stuff

import { createStore } from "redux";
// import { DECREASE, INCREASE } from "./actions";
// const DECREASE = 'DECREASE';//use variable to store our value to decrease typo
// other way to export from other file like actions.js
import reducer from "./reducer";
// react-redux - Provider - wraps app, connect - used in components
import { Provider } from "react-redux";

//initial store
// const initialStore = {
//   cart: cartItems,
//   total: 105,
//   amount: 5,
// };

// const store = createStore(reducer, initialStore); we can directly pass initialStore or 
// can set it up in reducer too as state = intialState good if we have multiple reducer
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // for react devtools
);
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });
// console.log(store.getState());

function App() {
  // cart setup
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
    // Provider is used at the top level of your React component tree to make the Redux store
    // available to all components in the application without having to pass it explicitly
    // at every level.
  );
}

export default App;

//redux is a app level state management library
//like react context api but bit more rigid
//setting up the state in the app level
// multiple component have access to state and method without prop drilling
// hooks like useReducer are better for small projects
//state is like global state
//store:-single state of truth

//store - stores data, think of state
//reducer - function that used to update store
//state - old state/state before update
//  action - what happened/ what update
//return updated or old state
//dispatch method - send actions to the store
//actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)
