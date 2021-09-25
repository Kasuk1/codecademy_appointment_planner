import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select name="contact" onChange={onChange}>
      <option key="No selected" value="No contact selected">No contact selected</option>
      {contacts.map(contact => <option key={contact.name} value={contact.name}>{contact.name}</option>)}
    </select>
  );
};
