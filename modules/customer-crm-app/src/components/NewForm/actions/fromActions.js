import {assocNewFormData} from "../../../constants";

export const addCar = (carData) => (dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        form: {
          car: {
            novy: carData.novy,
            vysneny: carData.vysneny,
            predchozi: carData.predchozi,
            errors: carData.errors
          }
        },
      },
      description: 'CREATE_CAR_DATA',
    })
  );
};

export const addCompany = (companyData) => (dispatch) => {
  dispatch(
    assocNewFormData({
      createForm: {
        form: {
          company: {
            firma: companyData.firma,
            poziceVeFirme: companyData.poziceVeFirme,
            ico: companyData.ico,
            dic: companyData.dic,
            faktAdresa: companyData.faktAdresa,
            bankSpojeni: companyData.bankSpojeni
          }
        }
      },
      description: 'CREATE_COMPANY_DATA',
    })
  );
};

export const addGdpr = (gdprData) => (dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        form: {
          gdpr: {
            novy: gdprData.novy,
            vysneny: gdprData.vysneny,
            predchozi: gdprData.predchozi,
            errors: gdprData.errors
          }
        }
      },
      description: 'CREATE_GDPR_DATA',
    })
  );
};

export const addNewCustomer = (newCustomerData) => (dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        form: {
          newCustomer: {
            porCislo: newCustomerData.porCislo,
            oddeleni: newCustomerData.oddeleni
          }
        }
      },
      description: 'CREATE_NEW_CUSTOMER_DATA',
    })
  );
};

export const addOther = (otherData) => (dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        form: {
          other: {
            rodinnyStav: otherData.rodinnyStav,
            pocetDeti: otherData.pocetDeti,
            konicky: otherData.konicky
          }
        }
      },
      description: 'CREATE_OTHER_DATA',
    })
  );
};

export const addPersonalData = (personalData) => (dispatch) => {
  dispatch(
    assocNewFormData({
      createFrom: {
        form: {
          personalData: {
            pohlavi: personalData.pohlavi,
            firstName: personalData.firstName,
            surname: personalData.surname,
            birthDate: personalData.birthDate,
            phone: personalData.phone,
            mail: personalData.mail,
            ulice: personalData.ulice,
            cp: personalData.cp,
            psc: personalData.psc,
            mesto: personalData.mesto,
            narodnost: personalData.narodnost,
            jazyk: personalData.jazyk,
            bankAcount: personalData.novy,
            option1: personalData.option1,
            option2: personalData.option2,
            option3: personalData.option3,
            option4: personalData.option4
          }
        }
      },
      description: 'CREATE_PERSONAL_DATA',
    })
  );
};
