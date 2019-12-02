import {SET_FORM} from "../actions/types";

const initialState = {
  form: {}
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
