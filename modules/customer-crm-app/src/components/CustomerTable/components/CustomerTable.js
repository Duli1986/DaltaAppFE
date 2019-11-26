import React, {Component, Suspense} from 'react';
import {CustomerCard} from "./index";
import CustomerButtons from "../../CustomerButtons/CustomerButtons";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/es/Card";
import {CustomerFields} from "../../CustomerFields";
import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
import * as router from 'react-router-dom';

// import navigation from '../../_nav';
// routes config

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
      <div className="app">
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <Card>
              <Col>
                  <CustomerButtons {...this.props} />
              </Col>
            </Card>
            <Card>
              <Col>
                  <CustomerCard {...this.props}/>
              </Col>
            </Card>
          </main>
        </div>
      </div>

    );
  }
}

export default CustomerTable;
