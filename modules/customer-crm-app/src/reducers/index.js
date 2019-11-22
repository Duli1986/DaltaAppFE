import { combineReducers } from 'redux';
import { compose, defaultTo, identity } from 'ramda';

const dummyReducer = compose(
  identity,
  defaultTo({})
);

const rootReducer = combineReducers({
      negotiationForm: dummyReducer,
      globalErrors: dummyReducer
    });

export default rootReducer;
