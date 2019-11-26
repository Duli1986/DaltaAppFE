import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import {BrowserRouter, Link, withRouter} from "react-router-dom";
import {Col, Row} from "reactstrap";

class ListModules extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      disable: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  routeChange() {
    this.props.history.push('/NewForm');
  }

  render() {
    return (
      <div>
        <Col>
          <Row className="text-center mt-3 mb-3">
            <Row>
            <Col>
              <Row className="text-center" md="6">
                <Col>
                  <Row className="float-left">
                    <Col sm xs="3" className="text-center">
                      <Link to="/NewForm">
                        <Button color="secondary"><i
                          className="cui-print icons"></i>&nbsp;Karta</Button>
                      </Link>
                    </Col>
                    <Col sm xs="3" className="text-center">
                      <Link to="/NewForm">
                        <Button color="secondary"><i
                          className="cui-print icons"></i>&nbsp;Seznam</Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col sm xs="3" className="text-center">
                      <Link to="/NewForm">
                        <Button color="primary">
                          <i className="cui-envelope-open icons"></i>&nbsp;Odeslat
                          email</Button>
                      </Link>
                    </Col>
                    <Col sm xs="3" className="text-center">
                      <Link to="/NewForm">
                        <Button color="primary">
                          <i className="cui-envelope-open icons"></i>&nbsp;Odeslat
                          SMS</Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
            <Row>
            <Col>
              <Row className="float-right" md="6">
                <Col sm xs="4" className="text-center">
                  <Button color="danger">Odstranit</Button>
                </Col>
                <Col sm xs="4" className="text-center">
                  <Button color="success" onClick={this.routeChange}> + Nový</Button>
                </Col>
                <Col sm xs="4" className="text-center">
                  <Button color="danger">Odstranit</Button>
                </Col>
              </Row>
            </Col>
            </Row>
          </Row>
        </Col>
      </div>
    );
  }
}

export default withRouter (ListModules);
