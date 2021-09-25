import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} placeholder="Title" onChange={({target}) => setTitle(target.value)} required />
      <input type="date" value={date} placeholder="Date" onChange={({target}) => setDate(target.value)} min={getTodayString()} required />
      <input type="time" value={time} placeholder="Time" onChange={({target}) => setTime(target.value)} required />
      <ContactPicker contacts={contacts} onChange={({target}) => setContact(target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
};
