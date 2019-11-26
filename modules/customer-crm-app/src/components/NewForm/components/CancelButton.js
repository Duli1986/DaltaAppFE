import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import {Link} from "react-router-dom";

class CancelButton extends Component {

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
          <Link to="/Dashboard">
            <Button color="danger">Zrušit</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default CancelButton;
