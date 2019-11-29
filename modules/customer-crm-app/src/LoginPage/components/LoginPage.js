import React, {Component, Suspense} from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form, Input,
  InputGroup, InputGroupAddon, InputGroupText,
  Row
} from "reactstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
  }

  signIn = (e) => {
    e.preventDefault()
    this.props.history.push('/listOfModules')
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="LoginPage">
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="5">
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"
                               placeholder="Username"
                               name="username"
                               value={this.state.username}
                               onChange={this.onChange}
                               error={errors.username}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password"
                               placeholder="Password"
                               name="password"
                               value={this.state.password}
                               onChange={this.onChange}
                               error={errors.password}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="5">
                          <Button color="primary"
                            className="px-4" onClick={e=>this.signIn(e)}>Login</Button>
                        </Col>
                        <Col xs="5" className="text-right">
                          <Button color="link" className="px-0">Forgot
                            password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(LoginPage);
