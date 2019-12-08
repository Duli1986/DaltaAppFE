import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import {Link, withRouter} from "react-router-dom";
import {Col, Row} from "reactstrap";
import { connect } from 'react-redux';

class ListOfModules extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      disable: false
    };
  }

  render() {
    return (
      <div className="center">
        <Col>
          <Row>
            <Col>
              <Link to="/crm">
              <Button color="warning">CRM</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/newForm">
              <Button color="danger">SKLAD</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/newForm">
              <Button color="danger">ZAKÁZKY</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/newForm">
              <Button color="danger" >PERSONALISTIKA</Button>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <Link to="/newForm">
              <Button color="danger">ÚČETNICTVÍ</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/newForm">
              <Button color="success">ŘÍZENÍ</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/newForm">
              <Button color="danger" >NASTAVENÍ</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(withRouter(ListOfModules));
