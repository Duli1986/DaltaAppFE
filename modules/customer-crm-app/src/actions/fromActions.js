export const addCar = (state, dispatch) => {
  dispatch({
    cars:{
      novy: state.novy,
      vysneny: state.vysneny,
      predchozi: state.predchozi,
      errors: state.errors
    }
  });
};

export const addCompany = (state, dispatch) => {
  dispatch({
    company: {
      firma: state.firma,
      poziceVeFirme: state.poziceVeFirme,
      ico: state.ico,
      dic: state.dic,
      faktAdresa: state.faktAdresa,
      bankSpojeni: state.bankSpojeni,
      errors: state.errors
    }
  });
};

export const addGdpr = (state, dispatch) => {
  dispatch({
    cars:{
      novy: state.novy,
      vysneny: state.vysneny,
      predchozi: state.predchozi,
      errors: state.errors
    }
  });
};
