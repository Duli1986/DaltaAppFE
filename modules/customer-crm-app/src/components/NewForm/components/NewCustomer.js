import React, {Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {addNewCustomer} from "../../../actions/fromActions";
import {connect} from "react-redux";

class NewCustomer extends Component {
  state = {
    porCislo: '',
    oddeleni: ''
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const { porCislo, oddeleni } = this.props;

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
                    value={porCislo}
                    onChange={this.onChange}
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
                         value={oddeleni}
                         onChange={this.onChange}
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

NewCustomer.propTypes = {
  porCislo: PropTypes.string.isRequired,
  oddeleni: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  porCislo: state.novy,
  oddeleni: state.vysneny
});

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({
    addNewCustomer,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomer);
