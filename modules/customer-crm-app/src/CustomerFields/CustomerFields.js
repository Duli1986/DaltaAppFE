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
    hledat: "",
    stav: "",
    od: "",
    do: "",
  };

  change = e => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
      [e.target.name]: e.target.value
    });
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
                  onChange={e => this.setState({hledat: e.target.value})}
                />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Input type="select"
                       name="stav"
                       id="select"
                       value={this.state.stav}
                       onChange={e => this.setState(
                         {stav: e.target.value})}
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
                  name="od"
                  placeholder="Od"
                  value={this.state.od}
                  onChange={e => this.setState({od: e.target.value})}
                />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Input
                  bsSize="sl"
                  name="do"
                  placeholder="Do"
                  value={this.state.do}
                  onChange={e => this.setState({do: e.target.value})}
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
