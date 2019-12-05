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

export const getCreateFormData = o(defaultToEmptyObject, getNewFormData('personalData'));

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


export const getPohlavi = createSelector(
  getCreateFormData,
  prop('pohlavi')
);

export const getFirstName = createSelector(
  getCreateFormData,
  prop('firstName')
);

export const getSurname = createSelector(
  getCreateFormData,
  prop('surname')
);

export const getBirthDate = createSelector(
  getCreateFormData,
  prop('birthDate')
);

export const getPhone = createSelector(
  getCreateFormData,
  prop('phone')
);

export const getMail= createSelector(
  getCreateFormData,
  prop('mail')
);

export const getUlice = createSelector(
  getCreateFormData,
  prop('ulice')
);

export const getCp= createSelector(
  getCreateFormData,
  prop('cp')
);

export const getPsc = createSelector(
  getCreateFormData,
  prop('psc')
);

export const getMesto = createSelector(
  getCreateFormData,
  prop('mesto')
);

export const getNarodnost = createSelector(
  getCreateFormData,
  prop('narodnost')
);

export const getJazyk = createSelector(
  getCreateFormData,
  prop('jazyk')
);

export const getBankAcount = createSelector(
  getCreateFormData,
  prop('bankAcount')
);

export const getOption1 = createSelector(
  getCreateFormData,
  prop('option1')
);

export const getOption2 = createSelector(
  getCreateFormData,
  prop('option2')
);

export const getOption3 = createSelector(
  getCreateFormData,
  prop('option3')
);

export const getOption4 = createSelector(
  getCreateFormData,
  prop('option4')
);
