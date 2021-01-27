import React from "react";

const ContactDetails = ({ firstName, lastName, email }) => (
  <div className='pl-3'>
    <div>
      {firstName} {lastName}
    </div>
    <span className='text-muted'>{email}</span>
  </div>
);

export default ContactDetails;
