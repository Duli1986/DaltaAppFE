import React, {Component} from 'react';
import {CancelButton, PersonalData} from "./index";
import NewCustomer from "./NewCustomer";
import Company from "./Company";
import Car from "./Car";
import Other from "./Other";
import Gdpr from "./Gdpr";
import OtherButtons from "./OtherButtons";

class NewForm extends Component {
  render() {
    return (
      <div>
        <CancelButton/>
        <NewCustomer/>
        <PersonalData/>
        <Company />
        <Car />
        <Other />
        <Gdpr />
        <OtherButtons />
      </div>
    )
  }
}

export default NewForm;
