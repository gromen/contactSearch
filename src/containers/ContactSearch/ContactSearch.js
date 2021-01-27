import React, { Component } from "react";

import SearchNavigation from "../../components/SearchNavigation/SearchNavigation";
import Contacts from "../../components/Contacts/Contacts";

class ContactSearch extends Component {
  state = {
    inputValue: "",
    contacts: [],
  };

  inputChangeHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <SearchNavigation
          filterOnChange={(event) => this.inputChangeHandler(event)}
          searchValue={this.state.inputValue}
        />
        <Contacts inputValue={this.state.inputValue} />
      </React.Fragment>
    );
  }
}
export default ContactSearch;
