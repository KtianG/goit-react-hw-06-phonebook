import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import css from './ContactListElement.module.css';

export const ContactListElement = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <div className={css.listElement}>
        <span>{name}: </span>&nbsp; <span> {number}</span>
      </div>
      <button onClick={() => removeContact(id)}>X</button>
    </li>
  );
};

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
