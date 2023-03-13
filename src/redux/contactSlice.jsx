import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'phonebook',
    initialState: {contacts: []},
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
    },
    },
})
  
export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;