import React, {Component} from 'react';
import PersonalData from "../NewForm/components/PersonalData";
import Button from "reactstrap/es/Button";
import Users from "../views/Users";
import render from "enzyme/src/render";
import {Link} from "react-router-dom";
import {NewForm} from "../NewForm/components";
import {CustomerCard} from "../CustomerTable/components";
import {Col, Row} from "reactstrap";

class CustomerButtons extends Component {

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
      <div>
        <Row>
          <Col>
            <Row className="align-items-left">
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Link to="/NewForm">
            <Button color="secondary" className="btn-pill">Karta</Button>
          </Link>
          </Col>
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Link to="/NewForm">
            <Button color="secondary" className="btn-pill">Seznam</Button>
          </Link>
          </Col>
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Link to="/NewForm">
            <Button color="primary" className="btn-pill">Odeslat email</Button>
          </Link>
          </Col>
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Link to="/NewForm">
            <Button color="primary" className="btn-pill">Odeslat SMS</Button>
          </Link>
          </Col>
            </Row>
          </Col>
          <Col>
            <Row className="align-items-right">
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Link to="/NewForm">
            <Button color="danger" className="btn-pill">Odstranit</Button>
          </Link>
          </Col>
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Link to="/NewForm">
            <Button color="success" className="btn-pill"> + Novy</Button>
          </Link>
          </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CustomerButtons;
