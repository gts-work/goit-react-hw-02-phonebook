import React from "react";
import styles from "./ContactsList.module.css";

const ContactItem = ({ id, name, number, onDelete }) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{number}</td>
    <td>
      <button
        className={styles.delete_contact_btn}
        value={id}
        onClick={onDelete}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default ContactItem;
