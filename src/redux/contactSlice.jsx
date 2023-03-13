import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'phonebook',
    initialState: {contacts: []},
    reducers: {
        addContact(state, action) {
            console.log('state',state)
            state.contacts.push(action.payload)
        },
        deleteContact(state, action) {
            console.log('state',state)
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
    },
    },
})
  
export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;