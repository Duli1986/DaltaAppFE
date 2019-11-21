import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import rootReducer from "./reducers";
import { Provider } from 'react-redux'

const defaulState = {
  welcome: ''
}

const storeState = (state = defaulState, action) => {
    switch(action.type){
      case 'GREET_ME':
          return {
            welcome: 'Halo'
          };
      default:
        return state;
    }
};
const store = createStore(storeState);

console.log(store.getState());
store.dispatch({
  type: 'GREET_ME'
})
console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
