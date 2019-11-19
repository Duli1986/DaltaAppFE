import { combineReducers } from 'redux';
import errorHandlerReducer from 'gef-ui-error-handler/reducers/errorHandlerReducer';
import reduxFormReducer from 'hugo2-ui-redux-form/reducers/reduxFormReducer';
import flowFormReducer from 'gef-ui-redux-form/reducers/flowForm';
import formReducer from 'gef-ui-redux-form/reducers/form';
import codelistReducer from 'gef-ui-codelist/reducer/codelistReducer';
import globalErrorsReducer from 'hugo2-ui-redux-common/reducers/globalErrors';
import contractDataReducer, {
  handledActions as contractDataActions,
} from 'hugo2-ui-redux-common/reducers/contractData';
import {
  fieldDescriptorReducer,
  formStateReducer,
  productVersionReducer,
  userInfoReducer,
  originalContractDataReducer,
  transitionDescriptorReducer,
} from 'hugo2-ui-redux-common/reducers/universal';
import * as commonConstants from 'hugo2-ui-redux-common/constants';
import { compose, defaultTo, identity } from 'ramda';
import { defaultToEmptyString, defaultToZero } from 'ramda-extension';
import { enableBatching } from 'redux-batched-actions';
import { clientSearchType, NEGOTIATION_FORM } from 'hugo2-ui-constants';
import toastrReducer from 'gef-ui-toastr/reducers/toastrReducer';
import userSession from 'hugo2-ui-features/userSession';
import modalLoader from 'hugo2-ui-features/modalLoader';
import modalRoot from 'hugo2-ui-features/modalRoot';
import condReducer, { typeEq, typeIn } from 'redux-cond-reducer';
import appContextReducer from 'gef-ui-redux-common/reducers/appContext';
import whisperReducer from 'hugo2-ui-features/whisper/reducers';
import temporaryDataReducer from 'hugo2-ui-redux-common/reducers/temporaryData';
import searchAgent from 'hugo2-ui-features/searchAgent';
import searchClient from 'hugo2-ui-features/searchClient';
import searchClientAddress from 'hugo2-ui-features/searchClientAddress';
import searchVehicle from 'fla-ui-features/searchVehicle';
import loadSubcontractsOverviewReducer from 'fla-ui-features/subcontracts/reducers/loadSubcontractsOverview';
import { loadUwNotesReducer, loadUwRemarksReducer } from 'fla-ui-features/uwNotesAndRemarks/reducers';
import { productReducer } from 'fla-ui-features/productCatalog/reducers';
import masterContractDataReducer from 'fla-ui-redux-common/reducers/masterContractDataReducer';
import { masterContractDataActions } from 'fla-ui-redux-common/constants';
import { masterContractMapReducer } from 'fla-ui-features/contract/reducers';
import underwritingReducer from 'fla-ui-redux-common/reducers/underwritingReducer';
import { connectRouter } from 'connected-react-router';

const formStateActions = commonConstants.formStateActions;
const temporaryDataActions = commonConstants.temporaryDataActions;

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
const stringReducer = compose(
  identity,
  defaultToEmptyString
);

const multiFormReducer = formReducer(NEGOTIATION_FORM, { step: 1 });
const clientLookupReducer = compose(
  identity,
  defaultTo({ lookupSearchType: clientSearchType.BIRTH_NUMBER, selectedClientPosition: 0 })
);

const vehicleLookupReducer = compose(
  identity,
  defaultTo({ lookupSearchType: 'identificationNumber', resultApplied: false })
);

const rootReducer = combineReducers({
    urls: dummyReducer,
    negotiationForm: combineReducers({
        registeredFields: dummyReducerArray,
        fieldsState: dummyReducer,
      }),
    });

export default enableBatching(reduxFormReducer(rootReducer));
