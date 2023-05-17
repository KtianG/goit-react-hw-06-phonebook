import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListElement.module.css';

export const ContactListElement = ({ name, number, removeContact }) => {
  return (
    <li>
      <div className={css.listElement}>
        <span>{name}: </span>&nbsp; <span> {number}</span>
      </div>
      <button onClick={() => removeContact(name)}>X</button>
    </li>
  );
};

ContactListElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
