import React, {Component} from 'react';
import PersonalData from "../NewForm/components/PersonalData";
import Button from "reactstrap/es/Button";
import Users from "../views/Users";
import render from "enzyme/src/render";
import {Link} from "react-router-dom";
import {NewForm} from "../NewForm/components";
import {CustomerCard} from "../CustomerTable/components";

class Customer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      disable: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        <div style={{float: 'right'}}>
          <Link to="/NewForm">
            <Button color="success"> + Novy</Button>
          </Link>
        </div>
        <CustomerCard />
      </div>
    );
  }
}

export default Customer;
