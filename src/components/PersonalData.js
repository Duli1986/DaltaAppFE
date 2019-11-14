import React ,  { Component } from 'react';
import { Col, Form, FormGroup, Input, Label} from "reactstrap";

class PersonalData extends Component{
  state = {
    pohlavi: "",
    firstName: "",
    surname:"",
    birthDate:"",
    phone:"",
    mail:"",
    bankAcount:""
  };

  change = e => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return(
      <Form action="" method="post" className="form-horizontal">
        <FormGroup row>
          <Col md="1">
            <Label htmlFor="select">Pohlaví</Label>
          </Col>
          <Col xs="12" md="3">
            <Input type="select"
                   name="pohlavi"
                   id="select"
                   value={this.state.pohlavi}
                   onChange={e => this.setState({pohlavi: e.target.value})}
            >
              <option value="0">-----</option>
              <option value="1">Muž</option>
              <option value="2">Žena</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm="1" htmlFor="input-normal">Jméno</Label>
            <Col sm="3">
              <Input
                bsSize="sl"
                name="firstName"
                placeholder="Jmeno"
                value={this.state.firstName}
                onChange={e => this.setState({firstName: e.target.value})}
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
                onChange={e => this.setState({surname: e.target.value})}
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
                onChange={e => this.setState({birthDate: e.target.value})}
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
              onChange={e => this.setState({phone: e.target.value})}
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
              onChange={e => this.setState({mail: e.target.value})}
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
              onChange={e => this.setState({bankAcount: e.target.value})}
            />
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default PersonalData;
