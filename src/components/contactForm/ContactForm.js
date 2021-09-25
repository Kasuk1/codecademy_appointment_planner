import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder="Your Name" onChange={({target}) => setName(target.value)} required />
      <input type="tel" value={phone} placeholder="###" onChange={({target}) => setPhone(target.value)} pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}" required />
      <input type="email" value={email} placeholder="your@email.com" onChange={({target}) => setEmail(target.value)} required />
      <input type="submit" value="Submit" />
    </form>
  );
};
