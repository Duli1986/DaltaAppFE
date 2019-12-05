import {path, identity, prop, o} from 'ramda';
import { createSelector } from 'reselect';
import {defaultToEmptyObject} from "ramda-extension";
import PropTypes from "prop-types";

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

export const getCreateFormData = o(defaultToEmptyObject, getNewFormData('other'));

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


export const getRodinnyStav = createSelector(
  getCreateFormData,
  prop('rodinnyStav')
);

export const getPocetDeti = createSelector(
  getCreateFormData,
  prop('pocetDeti')
);

export const getKonicky = createSelector(
  getCreateFormData,
  prop('konicky')
);

export const gettexTareaNotesinput = createSelector(
  getCreateFormData,
  prop('textareaNotesinput')
);
