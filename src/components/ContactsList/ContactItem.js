import React from "react";
import styles from "./ContactsList.module.css";

const ContactItem = ({ id, name, number }) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{number}</td>
  </tr>
);

export default ContactItem;
