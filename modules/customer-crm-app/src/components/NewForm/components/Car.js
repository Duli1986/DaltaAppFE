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
import { bindActionCreators } from 'redux';
import {addCar} from "../../../actions/fromActions";
import {getNovy, getPredchozi, getVysneny} from "../../../selectors/car";

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

    const carData = {
      predchozi: this.state.predchozi,
      novy: this.state.novy,
      vysneny: this.state.vysneny
    };

    this.props.addCar(carData);
  };

  render() {
    const { errors, predchozi, novy, vysneny } = this.props;

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
                         value={predchozi}
                         onChange={this.onChange}
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
                         value={novy}
                         onChange={this.onChange}
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
                         value={vysneny}
                         onChange={this.onChange}
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
  vysneny: PropTypes.string.isRequired,
  novy: PropTypes.string.isRequired,
  predchozi: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  vysneny: getVysneny(state),
  novy: getNovy(state),
  predchozi: getPredchozi(state)
});

/*const mapDispatchToProps = (dispatch) => {
   bindActionCreators({
    addCar,
  }, dispatch)
};*/

export default connect(mapStateToProps, {addCar})(Car);
