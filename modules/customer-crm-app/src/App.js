import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import {connect} from 'react-redux'
import LoginPage from "./LoginPage/components/LoginPage";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default connect()(App)
