import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  submitHandler,
}) => {
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          placeHolder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeHolder="Phone ###-###-####"
          pattern="\d{3}-\d{3}-\d{4}"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          placeHolder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="submit" value="Add Contact" />
      </form>
    </>
  );
};
