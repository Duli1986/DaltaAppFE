import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import customerData from '../constants/CustomerData'

function CustomerRow(props) {
  const customer = props.customer
  const customerLink = `/customerDetail/${customer.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={customer.id.toString()}>
      <th scope="row"><Link to={customerLink}>{customer.id}</Link></th>
      <td><Link to={customerLink}>{customer.name}</Link></td>
      <td>{customer.registered}</td>
      <td>{customer.role}</td>
      <td><Link to={customerLink}><Badge color={getBadge(customer.status)}>{customer.status}</Badge></Link></td>
    </tr>
  )
}

class CustomerCard extends Component {

  render() {

    const customerLink = customerData.filter((customer) => customer.id < 15)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Zákazníci
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">registered</th>
                    <th scope="col">role</th>
                    <th scope="col">status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {customerLink.map((customer, index) =>
                    <CustomerRow key={index} customer={customer}/>
                  )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CustomerCard;
