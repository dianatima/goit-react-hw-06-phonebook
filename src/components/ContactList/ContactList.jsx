import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";
import PropTypes from 'prop-types';
import { ContactWrap } from './ContactList.styled';
import { deleteContact } from "redux/contactSlice";

export const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);

    return (
        contacts.map((contact) => {
            return (
                <ContactWrap key={contact.id}>
                    <p>{contact.name}: {contact.number}</p>
                    <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
                </ContactWrap>
                )
            })
    )
} 


ContactList.propTypes = {
    removeHandler: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
};