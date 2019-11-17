import React, {Component} from 'react';
import {CustomerCard} from "./index";
import CustomerButtons from "../../CustomerButtons/CustomerButtons";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/es/Card";
import {CustomerFields} from "../../CustomerFields";

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
        <Card>
          <Col>
            <div>
              <CustomerButtons/>
            </div>
          </Col>
        </Card>
        <Card>
          <Col>
            <div>
              <CustomerFields/>
            </div>
          </Col>
        </Card>
        <Card>
          <Col>
            <div>
              <CustomerCard/>
            </div>
          </Col>
        </Card>
      </div>
    );
  }
}

export default CustomerTable;
