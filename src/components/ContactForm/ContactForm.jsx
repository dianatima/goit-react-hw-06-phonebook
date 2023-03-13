import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contactSlice";
import { ContactFormWrap, InputWrap, Button } from "./ContactForm.styled";
import { nanoid } from 'nanoid';
import { getContacts } from "redux/selectors";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
     

  const reset = () => {
    setName('');
    setNumber('');
  }
  
 const  handleSubmit = event => {
   event.preventDefault();
   const name = event.currentTarget.name.value;
   const number = event.currentTarget.number.value;
   
   const contact = {
    id: nanoid(),
    name: name,
    number: number,
   };

   const isOldContact = contacts.find((contact) => contact.name === name);
   if (isOldContact) {
    toast.error(`${name} is already in contacts`);
    return;
   }
   
   dispatch(addContact(contact));
    reset();
  }

     return (
         <ContactFormWrap onSubmit={handleSubmit}>
         <label htmlFor={nameInputId}>Name</label>
         <InputWrap
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
           value={name}
           onChange={event => setName(event.currentTarget.value)}
           id={nameInputId}
           />
             <label htmlFor={numberInputId}>Number</label>
            <InputWrap
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
               value={number}
               onChange={event => setNumber(event.currentTarget.value)}
                id={numberInputId}
            />
         <Button type="submit">Add contact</Button>
         <ToastContainer autoClose={3000} />
       </ContactFormWrap>
       
    )
  }