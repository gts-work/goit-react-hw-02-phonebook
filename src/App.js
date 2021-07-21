import React, { Component } from "react";

import Title from "./components/Title";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

import contacts from "./data/contacts.json";

class App extends Component {
  state = {
    contacts: contacts,
    filter: "",
  };

  addContact = (id, name, number) => {
    if (!this.isEqualName) {
      const contact = { id, name, number };
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  onSubmit = (data) => {
    console.log("App ~ data: ", data);

    const { id, name, number } = data;

    console.log("App ~ ID: ", id);
    console.log("App ~ name: ", name);

    this.addContact(id, name, number);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  isEqualName = (contacts, name) =>
    contacts.find((contact) => contact.name === name);

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContacts();

    return (
      <div className="container">
        <Title title="Phonebook" />
        <ContactForm onSubmit={this.onSubmit} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList contacts={visibleContact} />
      </div>
    );
  }
}

export default App;
