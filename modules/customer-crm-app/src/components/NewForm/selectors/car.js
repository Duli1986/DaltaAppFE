import {path, identity, prop, o} from 'ramda';
import { createSelector } from 'reselect';
import {defaultToEmptyObject} from "ramda-extension";

export const newFormDataPath = ['createForm', 'form'];
export const newFormData = path(newFormDataPath);

const getCreateForm = createSelector(
  newFormData,
  identity
);

export const getNewFormData = (propName) =>
  createSelector(
    [getCreateForm],
    prop(propName)
  );

export const getCreateFormData = o(defaultToEmptyObject, getNewFormData('car'));

/**
 * Get form data from createForm
 *
 * @documented
 * @category Selector
 * @example
 *
 *    getCreateFormData(state)
 *
 */


export const getPredchozi = createSelector(
  getCreateFormData,
  prop('predchozi')
);

export const getNovy = createSelector(
  getCreateFormData,
  prop('novy')
);

export const getVysneny = createSelector(
  getCreateFormData,
  prop('vysneny')
);

export const getErrors = createSelector(
  getCreateFormData,
  prop('errors')
);
