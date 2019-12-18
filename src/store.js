import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import roootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  roootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
