import React from 'react';
import { useDispatch } from 'react-redux';
import { setQueryFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(setQueryFilter(e.target.value));
  };

  return (
    <div>
      <p>Find Contacts by name</p>
      <input type="text" name="filter" onChange={e => handleInput(e)} />
    </div>
  );
};
