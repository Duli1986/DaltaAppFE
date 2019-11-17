import React, {Component} from 'react';
import {CustomerCard} from "../CustomerTable/components";
import {CustomerButtons} from "../CustomerButtons";

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
        <CustomerButtons />
        <CustomerCard />
      </div>
    );
  }
}

export default Customer;
