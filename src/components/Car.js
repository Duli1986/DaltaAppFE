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

class Car extends Component {
  state = {
    predchozi: "",
    novy: "",
    vysneny: "",
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
            <strong>Automobil</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Předchozí</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="predchozi"
                         id="select"
                         value={this.state.predchozi}
                         onChange={e => this.setState(
                           {predchozi: e.target.value})}
                  >
                    <option value="0">-----</option>
                    <option value="1">BMW</option>
                    <option value="2">Mercedes</option>
                    <option value="3">Audi</option>
                    <option value="4">Skoda</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Nový</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="novy"
                         id="select"
                         value={this.state.novy}
                         onChange={e => this.setState(
                           {novy: e.target.value})}
                  >
                    <option value="0">-----</option>
                    <option value="1">BMW</option>
                    <option value="2">Mercedes</option>
                    <option value="3">Audi</option>
                    <option value="4">Skoda</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Vysněný</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="vysneny"
                         id="select"
                         value={this.state.vysneny}
                         onChange={e => this.setState(
                           {vysneny: e.target.value})}
                  >
                    <option value="0">-----</option>
                    <option value="1">BMW</option>
                    <option value="2">Mercedes</option>
                    <option value="3">Audi</option>
                    <option value="4">Skoda</option>
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

export default Car;
