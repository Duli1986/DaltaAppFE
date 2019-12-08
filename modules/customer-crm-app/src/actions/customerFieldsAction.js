import {assocNewFormData} from "../constants";


export const searchCustomer = (searchCustomer) => (dispatch) => {
  dispatch(
    assocNewFormData({
      customerCard: {
        clientCard: {
          search: {
            novy: searchCustomer.novy,
            vysneny: searchCustomer.vysneny,
            predchozi: searchCustomer.predchozi,
            errors: searchCustomer.errors
          }
        },
      },
      description: 'CREATE_SEARCH_CUSTOMER_DATA',
    })
  );
};
