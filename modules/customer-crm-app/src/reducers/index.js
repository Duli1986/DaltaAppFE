import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import formReducer from "./formReducer";
import customerCardReducer from "./customerCardReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  createForm: formReducer,
  customerCard: customerCardReducer,
  errors: errorReducer
    });

export default rootReducer;
