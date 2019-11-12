import React ,  { Component } from 'react';

class Customer extends Component{
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
      </form>
    )
  }
}

export default Customer;
