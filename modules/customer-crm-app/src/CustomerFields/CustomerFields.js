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
    porCislo: "",
    oddeleni: "",
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
        <Col sm="6">
          <FormGroup row>
            <Input
              bsSize="sl"
              name="porCislo"
              placeholder="Pořadové číslo"
              value={this.state.porCislo}
              onChange={e => this.setState({porCislo: e.target.value})}
            /> </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup row>

            <Col xs="12" md="6">
              <Input type="select"
                     name="oddeleni"
                     id="select"
                     value={this.state.oddeleni}
                     onChange={e => this.setState(
                       {oddeleni: e.target.value})}
              >
                <option value="0">-----</option>
                <option value="1">Showroom</option>
                <option value="2">Servis</option>
                <option value="3">Pneuservis</option>
                <option value="4">Performance</option>
              </Input>
            </Col>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}

export default CustomerFields;
