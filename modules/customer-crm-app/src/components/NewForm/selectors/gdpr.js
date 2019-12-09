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

export const getCreateFormData = o(defaultToEmptyObject, getNewFormData('gdpr'));

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


export const getCheckboxTwo = createSelector(
  getCreateFormData,
  prop('checkbox2')
);

export const getCheckboxThree = createSelector(
  getCreateFormData,
  prop('checkbox3')
);

export const getTextareaGrprInput = createSelector(
  getCreateFormData,
  prop('textareaGrprInput')
);
