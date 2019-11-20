import React, {Component} from 'react';
import PersonalData from "../NewForm/components/PersonalData";
import Button from "reactstrap/es/Button";
import Users from "../views/Users";
import render from "enzyme/src/render";
import {Link} from "react-router-dom";
import {NewForm} from "../NewForm/components";
import {CustomerCard} from "../CustomerTable/components";
import {Col, Row} from "reactstrap";
import ButtonToolbar from "reactstrap/es/ButtonToolbar";

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
          <Col col="10" sm="10" md="10">
            <Row>

              <Col col="6" sm="4" md="4">
                <Link to="/NewForm">
                  <Button color="secondary"><i
                    className="cui-print icons"></i>&nbsp;Karta</Button>
                </Link>
              </Col>
              <Col col="6" sm="4" md="4">
                <Link to="/NewForm">
                  <Button color="secondary"><i
                    className="cui-print icons"></i>&nbsp;Seznam</Button>
                </Link>
              </Col>
              <Col col="6" sm="4" md="4">
                <Link to="/NewForm">
                  <Button color="primary">
                    <i className="cui-envelope-open icons"></i>&nbsp;Odeslat
                    email</Button>
                </Link>
              </Col>
              <Col col="6" sm="4" md="4">
                <Link to="/NewForm">
                  <Button color="primary">
                    <i className="cui-envelope-open icons"></i>&nbsp;Odeslat
                    SMS</Button>
                </Link>
              </Col>

            </Row>
          </Col>
          <Col col="2" sm="8" md="2">
            <Row className="justify-content-center mt-4" md="2">
              <ButtonToolbar className="align-items-right">
                <Col col="6" sm="4" md="2" xl className="mr-2">
                  <Link to="/NewForm">
                    <Button color="danger" xl
                            className="mr-2">Odstranit</Button>
                  </Link>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mr-2">
                  <Link to="/NewForm">
                    <Button color="success" xl
                            className="mr-2"> +
                      Novy</Button>
                  </Link>
                </Col>
              </ButtonToolbar>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CustomerButtons;
