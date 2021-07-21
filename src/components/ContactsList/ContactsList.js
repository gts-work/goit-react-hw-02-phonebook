import React from "react";

import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts }) => {
  console.log("ContactsList ~ contacts: ", contacts);

  return (
    <div>
      <h3>Contacts</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
