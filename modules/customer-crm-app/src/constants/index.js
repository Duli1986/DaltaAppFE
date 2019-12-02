import {keyMirror} from "ramda-extension";
import { createAction } from 'redux-actions';
import {prop} from "ramda";

export const descriptionP = prop('description');

const fromDataP = prop('createForm');

export const newFormDataActions = keyMirror({
  ASSOC_NEW_FORM_DATA: null,
});


export const assocNewFormData = createAction(
  newFormDataActions.ASSOC_NEW_FORM_DATA,
  fromDataP,
  descriptionP
);
