import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducer/user.reducer";
import { cartReducer } from "./reducer/cart.reducer";
import logger from "redux-logger";

const middlewares = [logger];

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(...middlewares));
