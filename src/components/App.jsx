import React from 'react';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import css from './App.module.css';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm ';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = (new_name, new_number) => {
    if (contacts.some(el => el.name === new_name)) {
      alert(`${new_name} is already in contacts`);
      return;
    }

    const new_contact = {
      id: nanoid(),
      name: new_name,
      number: new_number,
    };

    const new_contacts_array = [...contacts, new_contact];
    setContacts(new_contacts_array);
    localStorage.setItem('contacts', JSON.stringify(new_contacts_array));
  };

  const handleSubmitNewContact = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    addContact(name, number);
  };

  const removeContact = name_to_remove => {
    const new_array = contacts.filter(({ name }) => name !== name_to_remove);
    setContacts(new_array);

    localStorage.setItem('contacts', JSON.stringify(new_array));
  };

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmitNewContact} />
      <h2>Contacts</h2>
      <Filter handleInput={setFilter} />
      <ContactList removeContact={removeContact} />
    </div>
  );
};
