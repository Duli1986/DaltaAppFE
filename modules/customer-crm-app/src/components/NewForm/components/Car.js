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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Car extends Component {
  constructor() {
    super();
    this.state = {
      predchozi: '',
      novy: '',
      vysneny: '',
      errors: {}
    };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const { errors, predchozi, novy, vysneny } = this.state;

    return (
      <Col xs="5">
        <Card>
          <CardHeader>
            <strong>Automobil</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Předchozí</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="predchozi"
                         id="select"
                         value={this.state.predchozi}
                         onChange={this.onChange}
                         error={errors.predchozi}
                  >
                    <option value="0">-----</option>
                    <option value="1">BMW</option>
                    <option value="2">Mercedes</option>
                    <option value="3">Audi</option>
                    <option value="4">Skoda</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Nový</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="novy"
                         id="select"
                         value={this.state.novy}
                         onChange={this.onChange}
                         error={errors.novy}
                  >
                    <option value="0">-----</option>
                    <option value="1">BMW</option>
                    <option value="2">Mercedes</option>
                    <option value="3">Audi</option>
                    <option value="4">Skoda</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Vysněný</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="vysneny"
                         id="select"
                         value={this.state.vysneny}
                         onChange={this.onChange}
                         error={errors.vysneny}
                  >
                    <option value="0">-----</option>
                    <option value="1">BMW</option>
                    <option value="2">Mercedes</option>
                    <option value="3">Audi</option>
                    <option value="4">Skoda</option>
                  </Input>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

Car.propTypes = {
  vysneny: PropTypes.object.isRequired,
  novy: PropTypes.object.isRequired,
  predchozi: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  novy: state.novy,
  vysneny: state.vysneny,
  predchozi: state.predchozi,
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Car);
