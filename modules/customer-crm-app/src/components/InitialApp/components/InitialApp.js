import React, {Component} from 'react';
import auto from '../../../assets/img/brand/autoSuper.png'
import {Col, Row} from "reactstrap";
import Button from "reactstrap/es/Button";

class InitialApp extends Component {
  constructor(props) {
    super(props);

    this.dasN = this.dasN.bind(this);
  }


  dasN() {
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className="App">
         <button onClick={this.dasN}>Novy</button>
      </div>
    );
  }
}

export default InitialApp;
