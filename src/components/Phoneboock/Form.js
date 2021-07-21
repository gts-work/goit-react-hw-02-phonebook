import React, { Component } from "react";

const shortid = require("shortid");

class Form extends Component {
  state = {
    id: "",
    name: "",
    number: "",
  };

  handleChange = (e) => {
    // console.log("Form ~ e: ", e);
    // console.log("Form ~ e: ", e.currentTarget);
    const { name, value, id } = e.currentTarget;

    console.log("Form ~ ID: ", id);

    this.setState({ [name]: value, id: id });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ id: "", name: "", number: "" });
  };

  render() {
    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label htmlFor={numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
