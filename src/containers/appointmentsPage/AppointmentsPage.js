import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  addAppointments,
  contacts,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currName, setCurrName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointments(currName, contact, date, time);
    setCurrName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          contact={contact}
          setContact={setContact}
          currName={currName}
          setCurrName={setCurrName}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          submitHandler={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileData={appointments} />
      </section>
    </div>
  );
};
