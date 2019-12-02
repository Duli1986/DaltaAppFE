import {assocNewFormData} from "../constants";

export const addCar = (state, dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        car: {
          novy: state.novy,
          vysneny: state.vysneny,
          predchozi: state.predchozi,
          errors: state.errors
        }
      },
      description: 'CREATE_CAR_DATA',
    })
  );
};

export const addCompany = (state, dispatch) => {
  dispatch(
    assocNewFormData({
      createForm: {
        form: {
          company: {
            firma: state.firma,
            poziceVeFirme: state.poziceVeFirme,
            ico: state.ico,
            dic: state.dic,
            faktAdresa: state.faktAdresa,
            bankSpojeni: state.bankSpojeni,
            errors: state.errors
          }
        }
      },
      description: 'CREATE_COMPANY_DATA',
    })
  );
};

export const addGdpr = (state, dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        gdpr:{
          novy: state.novy,
          vysneny: state.vysneny,
          predchozi: state.predchozi,
          errors: state.errors
        }
      },
      description: 'CREATE_GDPR_DATA',
    })
  );
};
