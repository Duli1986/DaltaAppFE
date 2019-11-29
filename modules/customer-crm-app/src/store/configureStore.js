import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

export default () => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}
