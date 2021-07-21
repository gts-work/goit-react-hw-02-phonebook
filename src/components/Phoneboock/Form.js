import React, { Component } from "react";

const shortid = require("shortid");

class Form extends Component {
  state = {
    id: "",
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();

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
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
