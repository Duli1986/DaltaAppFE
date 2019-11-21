import React, {Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label, Row
} from "reactstrap";

class CustomerFields extends Component {
  state = {
    hledat: '',
    stav: '',
    odDoby: '',
    doDoby: '',
  };

  onChange = (e) => {
    this.setState({
      hledat: e.target.hledat,
      stav: e.target.stav,
      odDoby: e.target.odDoby,
      doDoby: e.target.doDoby,
    })
  };

  render() {
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
                  value={this.state.hledat}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Input type="select"
                       name="stav"
                       id="select"
                       value={this.state.stav}
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
                  value={this.state.odDoby}
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
                  value={this.state.doDoby}
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


export default CustomerFields;
