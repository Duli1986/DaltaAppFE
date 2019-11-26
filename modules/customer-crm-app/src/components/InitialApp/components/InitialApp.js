import React, {Component} from 'react';
import auto from '../../../assets/img/brand/autoSuper.png'

class InitialApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
         <img src={auto} alt="Logo" class="center" />
      </div>
    );
  }
}

export default InitialApp;
