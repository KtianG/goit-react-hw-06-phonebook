import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { ContactListElement } from 'components/ContactListElement/ContactListElement';

export const ContactList = ({ contacts, removeContact }) => {
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

  return <ul className={css.ContactList}>{contacts.map(renderContactList)}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
