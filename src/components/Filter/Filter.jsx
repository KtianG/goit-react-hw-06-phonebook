import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ handleInput }) => {
  return (
    <div>
      <p>Find Contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={e => handleInput(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
