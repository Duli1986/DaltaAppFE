import React from 'react';
import {Button} from "bootstrap/js/src";

export default class NewCustomer extends React.Component{
  state = {
    firstName: "",
    surname:"",
    birthDate:"",
    phone:"",
    mail:"",
    bankAcount:""
  };

  change = e => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.state({
      [e.target.name]: e.target.value
      });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.state({
      firstName: "",
      surname:"",
      birthDate:"",
      phone:"",
      mail:"",
      bankAcount:""
    });
  };

  render() {
    return(
      <form>
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={ e => this.change(e)}
        />

        <br/>
        <input
          name="surname"
          placeholder="Surname"
          value={this.state.surname}
          onChange={ e => this.change(e)}
        />
        <br/>
        <input
          name="birthDate"
          placeholder="Birth Date"
          value={this.state.birthDate}
          onChange={ e => this.change(e)}
        />
        <br/>
        <input
          name="phone"
          placeholder="Phone"
          value={this.state.phone}
          onChange={ e => this.change(e)}
        />
        <br/>
        <input
          name="mail"
          placeholder="Mail"
          value={this.state.mail}
          onChange={ e => this.change(e)}
        />
        <br/>
        <input
          name="bankAcount"
          placeholder="Bank Acount"
          value={this.state.bankAcount}
          onChange={ e => this.change(e)}
        />
        <br/>
        <button onClick={}/>
      </form>
    )
  }
}
