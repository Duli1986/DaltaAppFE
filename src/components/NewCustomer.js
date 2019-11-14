import React ,  { Component } from 'react';
import {CardBody, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import Button from "reactstrap/es/Button";

class NewCustomer extends Component{
  render() {
    return(
      <div>
        <Link to="/NewCustomer">
          <div style={{float: 'right'}}>

          </div>
        </Link>
      </div>
    )
  }
}

export default NewCustomer;
