import React ,  { Component } from 'react';
import {CardBody, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import Button from "reactstrap/es/Button";

class CancelButton extends Component{
   render() {
    return(
      <div>
        <div style={{float: 'right'}}>
          <Button>Zrušit</Button>
        </div>
      </div>
    )
  }
}

export default CancelButton;
