import React, { Component } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

import Contact from "./Contact/Contact";

class Contacts extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    axios
      .get("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json")
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const contactItems = this.state.contacts
      .map((contact) => {
        return (
          <Contact
            key={contact.id}
            avatarUrl={contact.avatar}
            firstName={contact.first_name}
            lastName={contact.last_name}
            email={contact.email}
          />
        );
      })
      .slice(0, 20);

    return (
      <main>
        <Container>
          <Row className='justify-content-center mt-2'>{contactItems}</Row>
        </Container>
      </main>
    );
  }
}

export default Contacts;
