import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import formReducer from "./formReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  createForm: formReducer,
  errors: errorReducer
    });

export default rootReducer;
