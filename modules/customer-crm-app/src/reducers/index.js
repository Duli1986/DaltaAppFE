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

const rootReducer = (history) =>
  combineReducers({
    urls: dummyReducer,
    router: connectRouter(history),
    negotiationForm: combineReducers({
      registeredFields: dummyReducerArray,
      fieldsState: dummyReducer,
      globalErrors: globalErrorsReducer,
      state: condReducer(
        [[typeEq(formStateActions.UPDATE_FORM_STATE), formStateReducer]],
        flowFormReducer(NEGOTIATION_FORM)
      ),
      contractData: condReducer(
        [
          underwritingReducer,
          [typeIn(contractDataActions), contractDataReducer],
          [typeIn(masterContractDataActions.ASSOC_MASTER_CONTRACT_DATA), masterContractMapReducer],
        ],
        multiFormReducer
      ),
      fieldDescriptor: fieldDescriptorReducer,
      transitionDescriptor: transitionDescriptorReducer,
      temporaryData: condReducer(
        [[typeEq(temporaryDataActions.ASSOC_TEMPORARY_DATA), temporaryDataReducer]],
        combineReducers({
          add: dummyReducer,
          internalEconomicActivityCode: dummyReducer,
          clientLookup: clientLookupReducer,
          searchAgent: searchAgent.reducers.defaultReducer,
          requestedDocuments: dummyReducerArray,
          debugInfo: dummyReducer,
          searchVehicle: combineReducers({
            registeredVehicles: searchVehicle.reducers.searchVehicleReducers.searchListVehicleReducer,
            vehiclesByVin: searchVehicle.reducers.searchVehicleReducers.getVehiclesReducer,
            vehicleValuation: searchVehicle.reducers.searchVehicleReducers.getExpertValuationReducer,
          }),
          filterVehicles: dummyReducer,
          searchClient: searchClient.reducers.defaultReducer,
          selectedServicePosition: dummyReducerZero,
          associatedParties: dummyReducerArray,
          searchClientAddress: searchClientAddress.reducers.defaultReducer,
          selectedRegisteredVehiclePosition: dummyReducerZero,
          selectedVehiclePosition: dummyReducerZero,
          vehicleLookup: vehicleLookupReducer,
          homeService: dummyReducer,
          homeServiceFilter: dummyReducer,
          subcontractsOverviewList: loadSubcontractsOverviewReducer,
          vehicleEvaluation: dummyReducer,
          uwNotes: loadUwNotesReducer,
          uwRemarks: loadUwRemarksReducer,
          originalContractData: dummyReducer,
          uniformity: dummyReducer,
          calculatedPackage: dummyReducer,
          mtaVehicleRenewalConfirmed: booleanReducer,
          urlQuery: dummyReducer,
          preliminaryPrintTimestamp: dummyReducerZero,
          coefficients: dummyReducer,
          pov: dummyReducer,
          hav: dummyReducer,
          envelopeId: dummyReducerZero,
          policyStartDateService: stringReducer,
          prevPolicyStartDate: stringReducer,
          prints: dummyReducer,
          originalKindOfFleet: stringReducer,
        })
      ),
      originalContractData: originalContractDataReducer,
      masterContractData: masterContractDataReducer,
    }),
    error: errorHandlerReducer,
    product: productReducer,
    productVersion: productVersionReducer,
    userInfo: userInfoReducer,
    codelists: codelistReducer,
    modalLoader: modalLoader.reducers.hugoReducer,
    modalWindows: modalRoot.reducers.defaultReducer,
    userSession: userSession.reducer,
    toastr: toastrReducer,
    appContext: appContextReducer,
    whisper: whisperReducer,
  });

export default (history) => enableBatching(reduxFormReducer(rootReducer(history)));
