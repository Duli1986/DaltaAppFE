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

const ListModules = React.lazy(() => import('./ListModules/components/ListOfModules'));


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
