import React ,  { Component } from 'react';
import {CardBody, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import Button from "reactstrap/es/Button";

class PersonalData extends Component{
  state = {
    firstName: "",
    surname:"",
    birthDate:"",
    phone:"",
    mail:"",
    bankAcount:""
  };

  change = e => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.state({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return(
      <Form action="" method="post" className="form-horizontal">
        <FormGroup row>
          <Label sm="1" htmlFor="input-normal">Jméno</Label>
            <Col sm="3">
              <Input
                bsSize="sl"
                name="firstName"
                placeholder="Jmeno"
                value={this.state.firstName}
                onChange={ e => this.change(e)}
              />
            </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm="1" htmlFor="input-normal">Prijmení</Label>
            <Col sm="3">
              <Input
                bsSize="sl"
                name="surname"
                placeholder="Prijmení"
                value={this.state.surname}
                onChange={ e => this.change(e)}
              />
            </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm="1" htmlFor="input-normal">Datum narození</Label>
            <Col sm="3">
              <Input
                bsSize="sl"
                name="birthDate"
                placeholder="Datum narození"
                value={this.state.birthDate}
                onChange={ e => this.change(e)}
              />
            </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm="1" htmlFor="input-large">Telefon</Label>
          <Col sm="3">
            <Input
              bsSize="sl"
              name="phone"
              placeholder="Jmeno"
              value={this.state.phone}
              onChange={ e => this.change(e)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm="1" htmlFor="input-large">E-mail</Label>
          <Col sm="3">
            <Input
              bsSize="sl"
              name="mail"
              placeholder="E-mail"
              value={this.state.mail}
              onChange={ e => this.change(e)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm="1" htmlFor="input-large">Bankovní účet</Label>
          <Col sm="3">
            <Input
              bsSize="sl"
              name="bankAcount"
              placeholder="Bankovní účet"
              value={this.state.bankAcount}
              onChange={ e => this.change(e)}
            />
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default PersonalData;
