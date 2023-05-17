import React from 'react';

import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import css from './ContactList.module.css';

import { ContactListElement } from 'components/ContactListElement/ContactListElement';

const getFilteredContacts = (contacts, filter) => {
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return filteredContacts;
};

export const ContactList = ({ removeContact }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  const renderContactList = ({ id, name, number }) => {
    return (
      <ContactListElement
        key={id}
        name={name}
        number={number}
        removeContact={removeContact}
      />
    );
  };

  return (
    <ul className={css.ContactList}>
      {filteredContacts.map(renderContactList)}
    </ul>
  );
};
