import cartReducer from "./cartReducer"
import productsReducer from "./productsReducer"
import { combineReducers } from "redux";

// state is stored in store
// what your state looks like is defined by object passed into combineReducers
const rootReducer = combineReducers({ 
  cart: cartReducer,
  products: productsReducer
})

export default rootReducer;