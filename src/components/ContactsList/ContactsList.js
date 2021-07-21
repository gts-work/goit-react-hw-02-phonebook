import React from "react";

import ContactItem from "./ContactItem";

const ContactsList = ({ contacts, onDelete }) => {
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
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
