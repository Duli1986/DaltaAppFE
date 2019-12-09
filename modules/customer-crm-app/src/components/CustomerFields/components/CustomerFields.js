import React, {Component} from 'react';
import {
  Col,
  FormGroup,
  Input,
  Label, Row
} from "reactstrap";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {searchCustomer} from "../actions/customerFieldsAction";

class CustomerFields extends Component {
  state = {
    hledat: '',
    stav: '',
    odDoby: '',
    doDoby: ''
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});

    const searchData = {
      hledat: this.state.hledat,
      stav: this.state.stav,
      odDoby: this.state.odDoby,
      doDoby: this.state.doDoby
    };

    this.props.searchCustomer(searchData);
  };

  render() {
    const { hledat, stav, odDoby, doDoby } = this.props;

    return (
      <Row>
        <Col md="5">
          <Row>
            <Col xs="4">
            <Label>Hledání</Label>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Input
                  bsSize="sl"
                  name="hledat"
                  placeholder="Hledat"
                  value={hledat}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Input type="select"
                       name="stav"
                       id="select"
                       value={stav}
                       onChange={this.onChange}
                >
                  <option value="0">-----</option>
                  <option value="1">Nový</option>
                  <option value="2">Aktivní</option>
                  <option value="3">Neaktivní</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col md="5">
          <Row>
            <Col xs="4">
              <Label>Datum vytvoření</Label>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Input
                  bsSize="sl"
                  name="odDoby"
                  placeholder="Od"
                  value={odDoby}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Input
                  bsSize="sl"
                  name="doDoby"
                  placeholder="Do"
                  value={doDoby}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}


const mapStateToProps = (state) => {
    return {
      hledat: state.hledat,
      stav: state.stav,
      odDoby: state.odDoby,
      doDoby: state.doDoby,
    }
};

export default connect(mapStateToProps, {searchCustomer} )(CustomerFields);
