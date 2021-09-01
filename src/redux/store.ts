import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer, cartReducer, directoryReducer } from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// for persistent state
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { shopReducer } from "./reducer/shop.reducer";


const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
middlewares.push(thunk);

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

//export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// for persistent state
const persistConfig = {
  key: "root",
  storage,
  whilelist: ["cart"],
};
export const persisReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persisReducer,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);
