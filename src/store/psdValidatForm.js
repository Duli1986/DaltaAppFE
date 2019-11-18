import { either } from 'ramda';
import { typeIn } from 'redux-cond-reducer';
import { formActions } from 'gef-ui-redux-form/constants';
import { getInPath } from 'gef-ui-utils';
import { getContractData } from 'hugo2-ui-redux-common/selectors/contractData';
import { getFromProductCube } from 'hugo2-ui-redux-common/selectors/productCatalog';
import { directAssocContractData } from 'hugo2-ui-redux-common/actions/contractData';
import { handledActions as contractDataActions } from 'hugo2-ui-redux-common/reducers/contractData';
import { validationRequiredStates } from 'fla-ui-constants';
import { getStep } from 'hugo2-ui-redux-common/selectors/contractData';

const isRequiredActionType = either(typeIn(contractDataActions), typeIn(Object.keys(formActions)));

const anyFieldChanged = (fields, contractData, nextContractData) => {
  const values = fields.reduce((res, field) => {
    res[field.param1] = getInPath(field.param1)(contractData);
    return res;
  }, {});

  return fields.some((field) => {
    const nextValue = getInPath(field.param1)(nextContractData);
    return values[field.param1] !== nextValue;
  });
};

export default (store) => (next) => (action) => {
  const state = store.getState();
  const contractData = getContractData(state);

  const result = next(action);
  const nextState = store.getState();
  const nextContractData = getContractData(nextState);
  const calculationRequired = getInPath('flags.calculationRequired')(nextContractData);
  const validationRequired = getInPath('flags.validationRequired')(nextContractData);
  const contractId = nextContractData.contractId;
  const fields = getFromProductCube('flaValidateRequiredPdS')(nextState);
  const step = getStep(nextState);

  if (
    fields
    && !(calculationRequired && validationRequired === validationRequiredStates.CALC)
    && isRequiredActionType(null, action)
    && anyFieldChanged(fields, contractData, nextContractData)
    && contractId
    && step
  ) {
    store.dispatch(
      directAssocContractData({
        contractData: {
          'flags.calculationRequired': true,
          'flags.validationRequired': validationRequiredStates.CALC,
        },
        description: 'CHANGE_FLAGS',
      })
    );
  }

  return result;
};
