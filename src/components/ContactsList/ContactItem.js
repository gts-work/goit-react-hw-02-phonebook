import React from "react";

const ContactItem = ({ id, name, number }) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{number}</td>
  </tr>
);

export default ContactItem;
