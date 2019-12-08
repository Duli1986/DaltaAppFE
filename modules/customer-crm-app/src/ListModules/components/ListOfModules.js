import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import {withRouter} from "react-router-dom";
import {Col, Row} from "reactstrap";
import { connect } from 'react-redux';
import './App.scss';

class ListOfModules extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      disable: false
    };
    this.routeChangeCrm = this.routeChangeCrm.bind(this);
    this.routeChangeSklady = this.routeChangeSklady.bind(this);
  }

  routeChangeCrm() {
    this.props.history.push('/crm');
  }

  routeChangeSklady() {
    this.props.history.push('/newForm');
  }

  render() {
    return (
      <div className="center">
        <Col>
          <Row>
            <Col>
              <Button onClick={this.routeChangeCrm} color="warning">CRM</Button>
            </Col>
            <Col>
              <Button color="danger" onClick={this.routeChangeSklady}>SKLAD</Button>
            </Col>
            <Col>
              <Button color="danger" onClick={this.routeChangeSklady}>ZAKÁZKY</Button>
            </Col>
            <Col>
              <Button color="danger" onClick={this.routeChangeSklady}>PERSONALISTIKA</Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <Button size="massive" color="danger">ÚČETNICTVÍ</Button>
            </Col>
            <Col>
              <Button color="success" onClick={this.routeChangeCrm}>ŘÍZENÍ</Button>
            </Col>
            <Col>
              <Button size='massive' color="danger" onClick={this.routeChangeSklady}>NASTAVENÍ</Button>
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
