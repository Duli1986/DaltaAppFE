import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import middleware from "react-dedux";

export default (initialState) => {
  return createStore(rootReducer, initialState);
}
