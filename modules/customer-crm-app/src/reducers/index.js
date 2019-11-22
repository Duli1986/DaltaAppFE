import { combineReducers } from 'redux';
import { compose, defaultTo, identity } from 'ramda';

const dummyReducer = compose(
  identity,
  defaultTo({})
);

const rootReducer = combineReducers({
      state: dummyReducer,
      globalErrors: dummyReducer
    });

export default rootReducer;
