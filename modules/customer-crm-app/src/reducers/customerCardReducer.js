import {CLIENT_CARD} from "../actions/types";
import { compose, identity, defaultTo } from 'ramda';
import { defaultToEmptyString, defaultToZero } from 'ramda-extension';

const stringReducer = compose(
  identity,
  defaultToEmptyString
);

const dummyReducer = compose(
  identity,
  defaultTo({})
);
const dummyReducerArray = compose(
  identity,
  defaultTo([])
);
const dummyReducerZero = compose(
  identity,
  defaultToZero
);
const booleanReducer = compose(
  identity,
  defaultTo(false)
);


const initialState = {
  clientCard: {

  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLIENT_CARD:
      return {
        ...state,
        form: action.payload
      };
    default:
      return state;
  }
}
