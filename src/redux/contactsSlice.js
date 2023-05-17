import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsInitialState = () => {
  const contacts_storage = localStorage.getItem('contacts');
  if (contacts_storage != null) {
    const contacts_array = JSON.parse(contacts_storage);
    return contacts_array;
  } else {
    return contactsInitialArray;
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState(),
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.some(el => el.name === action.payload.name)) {
          alert(`${action.payload.name} is already in contacts`);
        } else {
          state.push(action.payload);
        }
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
