import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducer/user.reducer";
import logger from "redux-logger";

const middlewares = [logger];

const rootReducer = combineReducers({
  user: userReducer,
});

export default createStore(rootReducer, applyMiddleware(...middlewares));
