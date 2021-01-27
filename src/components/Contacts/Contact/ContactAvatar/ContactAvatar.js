import React from "react";

import styles from "./ContactAvatar.module.scss";

const ContactAvatar = ({ avatarUrl, avatarAltLastName, avatarAltFirstName }) => (
  <div>
    <img
      className={[styles.Avatar, "rounded-circle img-fluid"].join(" ")}
      src={avatarUrl}
      alt={`Awatar of ${avatarAltLastName} ${avatarAltFirstName}`}
    />
  </div>
);

export default ContactAvatar;
