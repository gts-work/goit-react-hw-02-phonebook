import React, { Component } from "react";

import Title from "./Title";
import Form from "./Form";

class Phoneboock extends Component {
  render() {
    return (
      <>
        <Title title="Phoneboock" />
        <Form onSubmit={this.props.onSubmit} />
      </>
    );
  }
}

export default Phoneboock;
