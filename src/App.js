import React, { Component } from "react";

import Phoneboock from "./components/Phoneboock";
import ContactsList from "./components/ContactsList";

class App extends Component {
  state = {
    contacts: [],
  };

  onSubmit = (data) => {
    console.log("App ~ data: ", data);

    const { id, name, number } = data;

    console.log("App ~ ID: ", id);
    console.log("App ~ name: ", name);

    this.addContact(id, name, number);
  };

  addContact = (id, name, number) => {
    const contact = { id, name, number };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <div>
        <Phoneboock onSubmit={this.onSubmit} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
