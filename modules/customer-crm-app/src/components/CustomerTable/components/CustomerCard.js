import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';

import customerData from '../constants/CustomerData'
import {CustomerFields} from "../../CustomerFields/components";

function CustomerRow(props) {
  const customer = props.customer
  const customerLink = `/customerDetail/${customer.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Banned' ? 'danger' :
          'primary'
  }

  return (
    <tr key={customer.id.toString()}>
      <th scope="row"><Link to={customerLink}>{customer.id}</Link></th>
      <td><Link to={customerLink}>{customer.name}</Link></td>
      <td>{customer.birthDate}</td>
      <td><Link to={customerLink}><Badge color={getBadge(customer.status)}>{customer.status}</Badge></Link></td>
      <td>{customer.phone}</td>
      <td>{customer.email}</td>
      <td>{customer.home}</td>
      <td>{customer.nationality}</td>
      <td>{customer.language}</td>
      <td>{customer.company}</td>
      <td>{customer.position}</td>
      <td>{customer.car}</td>
      <td>{customer.create}</td>
      <td>{customer.attachment}</td>
    </tr>
  )
}

class CustomerCard extends Component {

  render() {

    const customerLink = customerData.filter((customer) => customer.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
          <CustomerFields />
          </Col>
        </Row>
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
                    <th scope="col">Čislo</th>
                    <th scope="col">Jméno</th>
                    <th scope="col">Narození</th>
                    <th scope="col">Stav</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Email</th>
                    <th scope="col">Bydliště</th>
                    <th scope="col">Národnost</th>
                    <th scope="col">Jazyk</th>
                    <th scope="col">Firma</th>
                    <th scope="col">Pozice</th>
                    <th scope="col">Automobil</th>
                    <th scope="col">Vytvoření</th>
                    <th scope="col">Přílohy</th>
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
