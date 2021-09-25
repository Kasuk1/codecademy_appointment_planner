import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

const App = () => {
  /* Define state variables for contacts and appointments */
  const [ contacts, setContacts ] = useState([{name: "Braulio Chinchay Gonzales", phone: "(123) 456-7890", email: "braulio@hotmail.com"}]);
  const [ appointments, setAppointments ] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /* Implement functions to add data to contacts and appointments */
  const addContact = (name, phone, email) => {
    setContacts((lastState) => {
      return [...lastState, {name, phone, email}];
    });
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((lastState) => {
      return [...lastState, {title, contact, date, time}];
    });
  };


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
