import React from "react";

import ContactItem from "./ContactItem";

const ContactsList = ({ contacts }) => {
  console.log("ContactsList ~ contacts: ", contacts);

  return (
    <div>
      <p>Contacts</p>
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
