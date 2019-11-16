import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Button from "reactstrap/es/Button";
import {CustomerCard} from "./index";

class CustomerTable extends Component {
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
        <div>
          <CustomerCard />
        </div>

      </div>
    );
  }
}

export default CustomerTable;
