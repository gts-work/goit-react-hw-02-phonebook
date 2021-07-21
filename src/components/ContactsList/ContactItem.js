import React from "react";

const ContactItem = ({ id, name, number }) => (
  <li key={id}>
    {name} {number}
  </li>
);

export default ContactItem;
