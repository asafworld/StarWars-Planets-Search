import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputName() {
  const { filterByName, setFilterByName } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      placeholder="Name"
      data-testid="name-filter"
      value={ filterByName.name }
      onChange={ ({ target }) => setFilterByName({ name: target.value }) }
    />
  );
}

export default InputName;
