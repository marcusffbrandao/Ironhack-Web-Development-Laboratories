import React, { Component } from 'react';
import './App.css';
import { Contacts } from './components/pages';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: [],
    extraContacts: [],
  };

  componentDidMount() {
    this.setState({
      contacts: contacts.slice(0, 5),
      extraContacts: contacts.slice(5),
    });
  }

  addRandomContact = () => {
    console.log('kasjdklasdsdjl')
  };

  deleteContact = (id) => {
    console.log(id)
  };

  render() {
    const { contacts } = this.state;

    return (
      <Contacts contacts={contacts} onclick={this.addRandomContact} deleteContact={this.deleteContact} />
    );
  }
}

export default App;
