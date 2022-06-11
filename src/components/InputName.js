import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputName() {
  const { filterByName, setFilterByName } = useContext(StarWarsContext);

  return (
    <section className="input-section">
      <input
        type="text"
        className="form-control input-name"
        placeholder="Name"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ ({ target }) => setFilterByName({ name: target.value }) }
      />
    </section>
  );
}

export default InputName;
