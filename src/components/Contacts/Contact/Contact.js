import React from "react";
import Col from "react-bootstrap/Col";

import ContactAvatar from "./ContactAvatar/ContactAvatar";
import ContactDetails from "./ContactDetails/ContactDetails";

import styles from "./Contact.module.scss";

const Contact = ({ avatarUrl, firstName, lastName, email, lastContactItem }) => (
  <Col className={["col-12", styles.Contact].join(" ")}>
    <div className='d-flex align-items-center p-2 border-left border-right border-top'>
      <ContactAvatar avatarUrl={avatarUrl} avatarAltFirstName={firstName} avatarAltLastName={lastName} />
      <ContactDetails firstName={firstName} lastName={lastName} email={email} />
    </div>
  </Col>
);

export default Contact;
