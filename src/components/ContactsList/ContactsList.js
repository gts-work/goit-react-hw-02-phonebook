import React from "react";

import ContactItem from "./ContactItem";

const ContactsList = ({ contacts }) => {
  console.log("ContactsList ~ contacts: ", contacts);

  return (
    <div>
      <p>Contacts</p>

      {contacts.map(({ id, name }) => (
        <ContactItem key={id} name={name} />
      ))}
    </div>
  );
};

export default ContactsList;
