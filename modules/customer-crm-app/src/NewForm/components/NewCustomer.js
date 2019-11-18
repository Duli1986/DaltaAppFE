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

class NewCustomer extends Component {
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
      <Col xs="5">
        <Card>
          <CardHeader>
            <strong>Zákazník</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" className="form-horizontal">
              <FormGroup row>
                <Label sm="3" htmlFor="input-normal">P. číslo</Label>
                <Col sm="6">
                  <Input
                    bsSize="sl"
                    name="porCislo"
                    placeholder="Pořadové číslo"
                    value={this.state.porCislo}
                    onChange={e => this.setState({porCislo: e.target.value})}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Z Oddělení</Label>
                </Col>
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
            </Form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default NewCustomer;
