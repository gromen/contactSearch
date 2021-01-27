import React from "react";
import { Navbar, InputGroup, Row, Col } from "react-bootstrap";

const Header = ({ filterOnChange, searchValue }) => (
  <header>
    <Navbar className='d-flex justify-content-center' bg='light'>
      Contacts
    </Navbar>
    <Row>
      <Col>
        <InputGroup className='justify-content-center'>
          <input type='text' value={searchValue} onChange={filterOnChange} />
        </InputGroup>
      </Col>
    </Row>
  </header>
);

export default Header;
