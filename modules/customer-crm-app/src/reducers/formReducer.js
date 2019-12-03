import {SET_FORM} from "../actions/types";
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
  form: {
    company:{
      firma: stringReducer,
      poziceVeFirme: stringReducer,
      ico: stringReducer,
      dic: stringReducer,
      faktAdresa: stringReducer,
      bankSpojeni: stringReducer,
    },
    car:{
      predchozi: stringReducer,
      novy: stringReducer,
      vysneny: stringReducer,
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        form: action.payload
      };
    default:
      return state;
  }
}
