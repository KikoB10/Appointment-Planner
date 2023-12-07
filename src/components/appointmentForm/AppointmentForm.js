import React, { useMemo } from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

//useMemo is a hook that lets you cache the result of a calculation between re-renders

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  currName,
  setCurrName,
  contacts,

  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  submitHandler,
}) => {
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Appointment Name"
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          required
        />
        <ContactPicker
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          placeholder="Date (dd-mm-yyyy)"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input type="submit" value="Add Appointment" />
      </form>
    </>
  );
};
