import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts, appointments}) => {
  const rendering = () => {
    if(contacts) {
      return contacts.map( (contact, index) => <Tile key={index} contact={contact} /> );
    } else {
      return appointments.map( (appointment, index) => <Tile key={index} appointment={appointment} /> );
    }
  }

  return (
    <div className="tile-container">
      {rendering()}
    </div>
  );
};
