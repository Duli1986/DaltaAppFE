import {path, identity, prop, o} from 'ramda';
import { createSelector } from 'reselect';

const creteFormDataPath = path(['createForm', 'form']);

export const getCreateFormData = getNewFormData('company');

export const getNewFormData = (propName) =>
  createSelector(
    [getCreateForm],
    prop(propName)
  );

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
const getCreateForm = createSelector(
  creteFormDataPath,
  identity
);


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
