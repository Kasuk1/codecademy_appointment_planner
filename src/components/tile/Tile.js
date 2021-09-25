import React from "react";

export const Tile = ({contact, appointment}) => {
  //const { name, phone, email } = contact;

  const rendering = () => {
    if(contact) {
      return (
        <>
          <p className="tile-title">Name: {contact.name}</p>
          <p className="tile">Phone: {contact.phone}</p>
          <p className="tile">Email: {contact.email}</p>
        </>
      );
    } else {
      return (
        <>
          <p className="tile-title">Title: {appointment.title}</p>
          <p className="tile">Contact: {appointment.contact}</p>
          <p className="tile">Date: {appointment.date}</p>
          <p className="tile">Time: {appointment.time}</p>
        </>
      );
    }
  }

  return (
    <div className="tile-container">
      {rendering()}
    </div>
  );
};
