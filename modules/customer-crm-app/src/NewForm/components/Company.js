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

class Company extends Component {
  state = {
    firma: "",
    poziceVeFirme: "",
    ico: "",
    dic: "",
    faktAdresa: "",
    bankSpojeni: "",
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
            <strong>Firma</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" className="form-horizontal">
              <FormGroup row>
                <Label sm="3" htmlFor="input-normal">Firma</Label>
                <Col sm="6">
                  <Input
                    bsSize="sl"
                    name="firma"
                    placeholder="Firma"
                    value={this.state.firma}
                    onChange={e => this.setState({firma: e.target.value})}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm="3" htmlFor="input-normal">Pozice ve firmě</Label>
                <Col sm="6">
                  <Input
                    bsSize="sl"
                    name="poziceVeFirme"
                    placeholder="Pozice ve firmě"
                    value={this.state.poziceVeFirme}
                    onChange={e => this.setState(
                      {poziceVeFirme: e.target.value})}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm="3" htmlFor="input-normal">IČO</Label>
                <Col sm="6">
                  <Input
                    bsSize="sl"
                    name="ico"
                    placeholder="IČO"
                    value={this.state.ico}
                    onChange={e => this.setState({ico: e.target.value})}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm="3" htmlFor="input-normal">DIČ</Label>
                <Col sm="6">
                  <Input
                    bsSize="sl"
                    name="dic"
                    placeholder="DIČ"
                    value={this.state.dic}
                    onChange={e => this.setState({dic: e.target.value})}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm="3" htmlFor="input-normal">Fakturační adresa</Label>
                <Col sm="6">
                  <Input
                    bsSize="sl"
                    name="faktAdresa"
                    placeholder="Fakturační adresa"
                    value={this.state.faktAdresa}
                    onChange={e => this.setState({faktAdresa: e.target.value})}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm="3" htmlFor="input-normal">Bankovní spojení</Label>
                <Col sm="6">
                  <Input
                    bsSize="sl"
                    name="bankSpojeni"
                    placeholder="Bankovní spojení"
                    value={this.state.bankSpojeni}
                    onChange={e => this.setState({bankSpojeni: e.target.value})}
                  />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Company;
