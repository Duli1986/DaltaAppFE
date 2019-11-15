import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import {Card, CardBody, Col, Row} from "reactstrap";

class OtherButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      disable: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <Col xs="2">
      <CardBody>
        <Row className="align-items-center">
          <Col col="2" sm="6" md="2" xl className="mb-3 mb-xl-0">
            <Button block color="success" className="btn-pill">Uložit</Button>
          </Col>
          <Col col="2" sm="6" xl className="mb-3 mb-xl-0">
            <Button block color="success" className="btn-pill">Uložit a Zavřít</Button>
          </Col>
        </Row>
      </CardBody>
      </Col>
    )
  }
}

export default OtherButtons;
