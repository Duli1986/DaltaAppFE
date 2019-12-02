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

export const getCreateFormData = o(defaultToEmptyObject, getNewFormData('company'));

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


export const getFrima = createSelector(
  getCreateFormData,
  prop('firma')
);

export const getPoziceVeFirme = createSelector(
  getCreateFormData,
  prop('poziceVeFirme')
);

export const getIco = createSelector(
  getCreateFormData,
  prop('ico')
);

export const getDic = createSelector(
  getCreateFormData,
  prop('dic')
);

export const getFaktAdresa = createSelector(
  getCreateFormData,
  prop('faktAdresa')
);

export const getBankSpojeni = createSelector(
  getCreateFormData,
  prop('bankSpojeni')
);

export const getErrors = createSelector(
  getCreateFormData,
  prop('errors')
);
