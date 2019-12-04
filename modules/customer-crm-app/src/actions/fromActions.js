import {assocNewFormData} from "../constants";

export const addCar = (state, dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        form: {
          car: {
            novy: state.novy,
            vysneny: state.vysneny,
            predchozi: state.predchozi,
            errors: state.errors
          }
        },
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
        form: {
          gdpr: {
            novy: state.novy,
            vysneny: state.vysneny,
            predchozi: state.predchozi,
            errors: state.errors
          }
        }
      },
      description: 'CREATE_GDPR_DATA',
    })
  );
};

export const addNewCustomer = (state, dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        form: {
          newCustomer: {
            porCislo: state.porCislo,
            oddeleni: state.oddeleni
          }
        }
      },
      description: 'CREATE_NEW_CUSTOMER_DATA',
    })
  );
};

export const addOther = (state, dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        form: {
          other: {
            rodinnyStav: state.rodinnyStav,
            pocetDeti: state.pocetDeti,
            konicky: state.konicky
          }
        }
      },
      description: 'CREATE_OTHER_DATA',
    })
  );
};

export const addPersonalData = (state, dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        form: {
          personalData: {
            pohlavi: state.pohlavi,
            firstName: state.firstName,
            surname: state.surname,
            birthDate: state.birthDate,
            phone: state.phone,
            mail: state.mail,
            ulice: state.ulice,
            cp: state.cp,
            psc: state.psc,
            mesto: state.mesto,
            narodnost: state.narodnost,
            jazyk: state.jazyk,
            bankAcount: state.novy,
            option1: state.option1,
            option2: state.option2,
            option3: state.option3,
            option4: state.option4
          }
        }
      },
      description: 'CREATE_PERSONAL_DATA',
    })
  );
};
