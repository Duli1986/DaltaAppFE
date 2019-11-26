import React, {Component} from 'react';
import {
  BrowserRouter,
  HashRouter,
  Route, Router,
  Switch,
  withRouter
} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import {connect} from 'react-redux'

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const LoginPage = React.lazy(() => import('./LoginPage/components/LoginPage'));
const CustomerTable = React.lazy(() => import('./components/CustomerTable/components/CustomerTable'));

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
              <Route path="/" name="Home" render={props => <LoginPage {...props}/>} />
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default connect()(App)
