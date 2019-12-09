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
import { addCompany } from "../actions/fromActions";
import {connect} from "react-redux";
import {
  getBankSpojeni,
  getDic, getErrors, getFaktAdresa,
  getFrima,
  getIco,
  getPoziceVeFirme
} from "../selectors/company";

class Company extends Component {
  state = {
    firma: '',
    poziceVeFirme: '',
    ico: '',
    dic: '',
    faktAdresa: '',
    bankSpojeni: '',
    errors: {}
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});

    const companyData = {
      firma: this.state.firma,
      poziceVeFirme: this.state.poziceVeFirme,
      ico: this.state.ico,
      dic: this.state.dic,
      faktAdresa: this.state.faktAdresa,
      bankSpojeni: this.state.bankSpojeni,
    };

    this.props.addCompany(companyData);
  };

  render() {
    const { firma, poziceVeFirme, ico, dic, faktAdresa, bankSpojeni } = this.props;

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
                    value={firma}
                    onChange={this.onChange}
                    error={firma}
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
                    value={poziceVeFirme}
                    onChange={this.onChange}
                    error={poziceVeFirme}
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
                    value={ico}
                    onChange={this.onChange}
                    error={ico}
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
                    value={dic}
                    onChange={this.onChange}
                    error={dic}
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
                    value={faktAdresa}
                    onChange={this.onChange}
                    error={faktAdresa}
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
                    value={bankSpojeni}
                    onChange={this.onChange}
                    error={bankSpojeni}
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

Company.propTypes = {
  firma: PropTypes.string.isRequired,
  poziceVeFirme: PropTypes.string.isRequired,
  ico: PropTypes.string.isRequired,
  dic: PropTypes.string.isRequired,
  faktAdresa: PropTypes.string.isRequired,
  bankSpojeni: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  firma: getFrima(state),
  poziceVeFirme: getPoziceVeFirme(state),
  ico: getIco(state),
  dic: getDic(state),
  faktAdresa: getFaktAdresa(state),
  bankSpojeni: getBankSpojeni(state),
  errors: getErrors(state)
});

/*const mapDispatchToProps = (dispatch) => {
  bindActionCreators({
    addCompany,
  }, dispatch)
};*/

export default connect(mapStateToProps, {addCompany})(Company);
