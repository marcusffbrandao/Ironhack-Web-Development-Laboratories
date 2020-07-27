import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import { Button, FilterForm, Table, Title } from './components';

class App extends Component {
  state= {
    contacts: [],
    filteredContacts: [],
    contactsDatabase: [],
  };

  componentDidMount() {
    this.setState({
      contacts: contacts.slice(0, 5),
      filteredContacts: contacts.slice(0, 5),
      contactsDatabase: contacts.slice(5),
    });
  }

  filterContacts = (filter) => {
    const { contacts } = this.state;
    const { name, popularity } = filter;

    const filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(name) && contact.popularity >= +popularity;
    });

    this.setState({
      filteredContacts,
    })
  }

  addRandomContact = () => {
    const { contacts, filteredContacts, contactsDatabase } = this.state;
    const randomIdx = Math.floor(Math.random() * contactsDatabase.length);
    const newContact = contactsDatabase[randomIdx];

    contacts.push(newContact);
    filteredContacts.push(newContact);
    contactsDatabase.splice(randomIdx, 1);

    this.setState({
      contacts,
      filteredContacts,
      contactsDatabase,
    })
  };

  removeContact = (idx) => {
    const { contacts, filteredContacts, contactsDatabase } = this.state;

    contactsDatabase.push(contacts[idx])
    contacts.splice(idx, 1);
    filteredContacts.splice(idx, 1);

    this.setState({
      contacts,
      filteredContacts,
      contactsDatabase,
    })
  };

  render() {
    const { filteredContacts } = this.state;

    return (
      <div>
        <Title htmlType="H1">IronContacts</Title>
        <FilterForm filterFunction={this.filterContacts} />
        <Button type="button" onclick={this.addRandomContact}>Add Random Contact</Button>
        <Table contacts={filteredContacts} funcRemove={this.removeContact} />
      </div>
    );
  }
}

export default App;
