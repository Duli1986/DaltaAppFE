import React, {Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

class PersonalData extends Component {
  state = {
    pohlavi: "",
    firstName: "",
    surname: "",
    birthDate: "",
    phone: "",
    mail: "",
    ulice: "",
    cp: "",
    psc: "",
    mesto: "",
    narodnost: "",
    jazyk: "",
    bankAcount: ""
  };

  change = e => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Col xs="5">
        <Card>
          <CardHeader>
            <strong>Osobní údaje</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Pohlaví</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="pohlavi"
                         id="select"
                         value={this.state.pohlavi}
                         onChange={e => this.setState(
                           {pohlavi: e.target.value})}
                  >
                    <option value="0">-----</option>
                    <option value="1">Muž</option>
                    <option value="2">Žena</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm="3" htmlFor="input-normal">Jméno</Label>
                <Col sm="6">
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
                <Label sm="3" htmlFor="input-normal">Prijmení</Label>
                <Col sm="6">
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
                <Label sm="3" htmlFor="input-normal">Datum narození</Label>
                <Col sm="6">
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
                <Label sm="3" htmlFor="input-large">Telefon</Label>
                <Col sm="6">
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
                <Label sm="3" htmlFor="input-large">E-mail</Label>
                <Col sm="6">
                  <Input
                    bsSize="sl"
                    name="mail"
                    placeholder="E-mail"
                    value={this.state.mail}
                    onChange={e => this.setState({mail: e.target.value})}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="my-0">
                <Col md="3">
                  <Label htmlFor="select">Adresa</Label>
                </Col>
                <Col xs="2">
                  <FormGroup>
                    <Input type="text"
                           name="ulice"
                           placeholder="Ulice"
                           value={this.state.ulice}
                           onChange={e => this.setState(
                             {ulice: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col xs="2">
                  <FormGroup>
                    <Input type="text"
                           name="cp"
                           placeholder="Č.P."
                           value={this.state.cp}
                           onChange={e => this.setState({cp: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col xs="2">
                  <FormGroup>
                    <Input type="text"
                           name="psc"
                           placeholder="PSČ"
                           value={this.state.psc}
                           onChange={e => this.setState({psc: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col xs="2">
                  <FormGroup>
                    <Input type="text"
                           name="mesto"
                           placeholder="Město"
                           value={this.state.mesto}
                           onChange={e => this.setState(
                             {mesto: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Národnost</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="narodnost"
                         id="select"
                         value={this.state.narodnost}
                         onChange={e => this.setState(
                           {narodnost: e.target.value})}
                  >
                    <option value="0">-----</option>
                    <option value="1">Česká</option>
                    <option value="2">US</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Jazyk</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="jazyk"
                         id="select"
                         value={this.state.jazyk}
                         onChange={e => this.setState(
                           {jazyk: e.target.value})}
                  >
                    <option value="0">-----</option>
                    <option value="1">Čeština</option>
                    <option value="2">Angličtina</option>
                    <option value="3">Italština</option>
                    <option value="4">Němčina</option>
                    <option value="5">Ruština</option>
                    <option value="6">Španělština</option>
                    <option value="7">Francouzština</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm="3" htmlFor="input-large">Bankovní účet</Label>
                <Col sm="6">
                  <Input
                    bsSize="sl"
                    name="bankAcount"
                    placeholder="Bankovní účet"
                    value={this.state.bankAcount}
                    onChange={e => this.setState({bankAcount: e.target.value})}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>Sociální sítě</Label>
                </Col>
                <Col md="9">
                  <FormGroup check inline>
                    <Input className="form-check-input" type="checkbox"
                           id="inline-checkbox1" name="inline-checkbox1"
                           value="option1"/>
                    <Label className="form-check-label" check
                           htmlFor="inline-checkbox1"> </Label>
                  </FormGroup>

                  <FormGroup check inline>
                    <Input className="form-check-input" type="checkbox"
                           id="inline-checkbox2" name="inline-checkbox2"
                           value="option2"/>
                    <Label className="form-check-label" check
                           htmlFor="inline-checkbox2"> </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="checkbox"
                           id="inline-checkbox3" name="inline-checkbox3"
                           value="option3"/>
                    <Label className="form-check-label" check
                           htmlFor="inline-checkbox3"> </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="checkbox"
                           id="inline-checkbox4" name="inline-checkbox4"
                           value="option4"/>
                    <Label className="form-check-label" check
                           htmlFor="inline-checkbox4"> </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default PersonalData;
