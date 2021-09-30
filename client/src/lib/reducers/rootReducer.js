import cartReducer from "./cartReducer"
import { combineReducers } from "redux";

// state is stored in store
// what your state looks like is defined by object passed into combineReducers
const rootReducer = combineReducers({ cart: cartReducer })

export default rootReducer;