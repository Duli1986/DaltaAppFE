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
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import { addPersonalData} from "../../../actions/fromActions";
import {connect} from "react-redux";

class PersonalData extends Component {
  state = {
    pohlavi: '',
    firstName: '',
    surname: '',
    birthDate: '',
    phone: '',
    mail: '',
    ulice: '',
    cp: '',
    psc: '',
    mesto: '',
    narodnost: '',
    jazyk: '',
    bankAcount: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const { pohlavi, firstName, surname, birthDate, phone, mail, ulice,
      cp, psc, mesto, narodnost, jazyk, bankAcount, option1, option2, option3, option4 } = this.props;

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
                         value={pohlavi}
                         onChange={this.onChange}
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
                    value={firstName}
                    onChange={this.onChange}
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
                    value={surname}
                    onChange={this.onChange}
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
                    value={birthDate}
                    onChange={this.onChange}
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
                    value={phone}
                    onChange={this.onChange}
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
                    value={mail}
                    onChange={this.onChange}
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
                           value={ulice}
                           onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <Col xs="2">
                  <FormGroup>
                    <Input type="text"
                           name="cp"
                           placeholder="Č.P."
                           value={cp}
                           onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <Col xs="2">
                  <FormGroup>
                    <Input type="text"
                           name="psc"
                           placeholder="PSČ"
                           value={psc}
                           onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <Col xs="2">
                  <FormGroup>
                    <Input type="text"
                           name="mesto"
                           placeholder="Město"
                           value={mesto}
                           onChange={this.onChange}
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
                         value={narodnost}
                         onChange={this.onChange}
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
                         value={jazyk}
                         onChange={this.onChange}
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
                    value={bankAcount}
                    onChange={this.onChange}
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
                           value={option1}
                           onChange={this.onChange}
                    />
                    <Label className="form-check-label" check
                           htmlFor="inline-checkbox1"> </Label>
                  </FormGroup>

                  <FormGroup check inline>
                    <Input className="form-check-input" type="checkbox"
                           id="inline-checkbox2" name="inline-checkbox2"
                           value={option2}
                           onChange={this.onChange}
                    />
                    <Label className="form-check-label" check
                           htmlFor="inline-checkbox2"> </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="checkbox"
                           id="inline-checkbox3" name="inline-checkbox3"
                           value={option3}
                           onChange={this.onChange}
                    />
                    <Label className="form-check-label" check
                           htmlFor="inline-checkbox3"> </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="checkbox"
                           id="inline-checkbox4" name="inline-checkbox4"
                           value={option4}
                           onChange={this.onChange}
                    />
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

PersonalData.propTypes = {
  pohlavi: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  ulice: PropTypes.string.isRequired,
  cp: PropTypes.string.isRequired,
  psc: PropTypes.string.isRequired,
  mesto: PropTypes.string.isRequired,
  narodnost: PropTypes.string.isRequired,
  jazyk: PropTypes.string.isRequired,
  bankAcount: PropTypes.string.isRequired,
  option1: PropTypes.bool.isRequired,
  option2: PropTypes.bool.isRequired,
  option3: PropTypes.bool.isRequired,
  option4: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
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
});

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({
    addPersonalData,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);
