import React ,  { Component } from 'react';
import {CancelButton, PersonalData} from "./index";
import NewCustomer from "./NewCustomer";

class NewForm extends Component{
  render() {
    return(
      <div>
        <CancelButton />
        <NewCustomer />
        <PersonalData />
      </div>
    )
  }
}

export default NewForm;
