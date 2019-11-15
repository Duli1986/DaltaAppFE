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

class Gdpr extends Component {
  state = {
    rodinnyStav: "",
    pocetDeti: "",
    konicky: "",
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
            <strong>GDPR</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" className="form-horizontal">
              <FormGroup row>
                <Col md="9">
                  <FormGroup check className="checkbox">
                    <Input className="form-check-input" type="checkbox"
                           id="checkbox2" name="checkbox2" value="option2"/>
                    <Label check className="form-check-label"
                           htmlFor="checkbox2">Souhlasím se zpracováním mých
                      osobních údajů.</Label>
                  </FormGroup>
                  <FormGroup check className="checkbox">
                    <Input className="form-check-input" type="checkbox"
                           id="checkbox3" name="checkbox3" value="option3"/>
                    <Label check className="form-check-label"
                           htmlFor="checkbox3">Souhlasím s odesíláním
                      novinek.</Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="6" md="9">
                  <textarea type="podpis"
                            name="textarea-input"
                            id="textarea-input"
                            rows="3"
                            cols="30"
                            placeholder="Podpis"/>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Gdpr;
