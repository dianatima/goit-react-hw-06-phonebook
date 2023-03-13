import { AppWrap } from "./App.styled";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import PropTypes from "prop-types";

export function App() {
  return (
    <>
      <AppWrap>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </AppWrap>
    </>
  );
}

App.propTypes = {
  state: PropTypes.objectOf({
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  }),
};
