import React, {Component, Suspense} from 'react';
import {CustomerCard} from "./index";
import CustomerButtons from "../../CustomerButtons/CustomerButtons";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/es/Card";
import {
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
} from '@coreui/react';
import Header from "../../../containers/Header/Header";
import InitialApp from "../../InitialApp/components/InitialApp";


class CustomerTable extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

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
        <Card>
          <Col>
        <AppHeader>
          <Suspense  fallback={this.loading()}>
            <Header />
          </Suspense>
        </AppHeader>
          </Col>
        </Card>
        <div className="app-body">
          <AppSidebar display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <InitialApp {...this.props}/>
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
