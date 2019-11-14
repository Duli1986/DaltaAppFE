import React ,  { Component } from 'react';
import {CardBody, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import Button from "reactstrap/es/Button";
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
