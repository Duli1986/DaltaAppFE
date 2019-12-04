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
import {addOther} from "../../../actions/fromActions";
import {connect} from "react-redux";

class Other extends Component {
  state = {
    rodinnyStav: '',
    pocetDeti: '',
    konicky: '',
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const { rodinnyStav, pocetDeti, konicky } = this.props;

    return (
      <Col xs="5">
        <Card>
          <CardHeader>
            <strong>Ostatní</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Rodinný stav</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="rodinnyStav"
                         id="select"
                         value={rodinnyStav}
                         onChange={this.onChange}
                  >
                    <option value="0">-----</option>
                    <option value="1">Svobodný</option>
                    <option value="2">Ženatý</option>
                    <option value="3">Vdaná</option>
                    <option value="4">Přítel/Přítelkyně</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Počet dětí</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="pocetDeti"
                         id="select"
                         value={pocetDeti}
                         onChange={this.onChange}
                  >
                    <option value="0">-----</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">3 a více</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Koníčky</Label>
                </Col>
                <Col xs="12" md="6">
                  <Input type="select"
                         name="konicky"
                         id="select"
                         value={konicky}
                         onChange={this.onChange}
                  >
                    <option value="0">-----</option>
                    <option value="1">sport</option>
                    <option value="2">auta</option>
                    <option value="3">četba</option>
                    <option value="4">kolo</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="textarea-input">Poznámky</Label>
                </Col>
                <Col xs="6" md="9">
                  <textarea type="poznamky"
                            name="textarea-input"
                            id="textarea-input"
                            rows="9"
                            cols="40"
                            placeholder="Poznámky..."/>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

Other.propTypes = {
  rodinnyStav: PropTypes.string.isRequired,
  pocetDeti: PropTypes.string.isRequired,
  konicky: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  rodinnyStav: state.rodinnyStav,
  pocetDeti: state.pocetDeti,
  konicky: state.konicky
});

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({
    addOther,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Other);
