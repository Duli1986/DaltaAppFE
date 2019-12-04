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
import {addGdpr} from "../../../actions/fromActions";
import {connect} from "react-redux";

class Gdpr extends Component {
  state = {
    checkbox2: '',
    checkbox3: '',
    textareaGrprInput: ''
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});

    const gdprData = {
      checkbox2: this.state.checkbox2,
      checkbox3: this.state.checkbox3,
      textareaGrprInput: this.state.textareaGrprInput
    };

    this.props.addGdpr(gdprData);
  };

  render() {
    const { checkbox2, checkbox3, textareaGrprInput } = this.props;

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
                    <Input className="form-check-input"
                           type="checkbox"
                           id="checkbox2"
                           name="checkbox2"
                           value={checkbox2}
                           onChange={this.onChange}
                    />
                    <Label check className="form-check-label"
                           htmlFor="checkbox2">Souhlasím se zpracováním mých
                      osobních údajů.</Label>
                  </FormGroup>
                  <FormGroup check className="checkbox">
                    <Input className="form-check-input"
                           type="checkbox"
                           id="checkbox3"
                           name="checkbox3"
                           value={checkbox3}
                           onChange={this.onChange}
                    />
                    <Label check className="form-check-label"
                           htmlFor="checkbox3">Souhlasím s odesíláním
                      novinek.</Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="6" md="9">
                  <textarea type="podpis"
                            name="textareaGrprInput"
                            id="textarea-input"
                            rows="3"
                            cols="30"
                            placeholder="Podpis"
                            value={textareaGrprInput}
                            onChange={this.onChange}
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

Gdpr.propTypes = {
  checkbox2: PropTypes.bool.isRequired,
  checkbox3: PropTypes.bool.isRequired,
  textareaGrprInput: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  checkbox2: state.checkbox2,
  checkbox3: state.checkbox3,
  textareaGrprInput: state.textareaGrprInput
});

/*const mapDispatchToProps = (dispatch) => {
  bindActionCreators({

  }, dispatch)
};*/

export default connect(mapStateToProps, {addGdpr})(Gdpr);
