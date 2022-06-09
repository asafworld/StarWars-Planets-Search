import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const columnArr = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function OrderComponent() {
  const [columOrder] = useState(columnArr);
  const [localOrder, setLocalOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });
  const { setOrder, filtered, setFiltered } = useContext(StarWarsContext);

  function onChangeRadio({ target }) {
    const { value } = target;
    setLocalOrder({
      ...localOrder,
      sort: value,
    });
  }

  function onChangeDropdown({ target }) {
    const { value } = target;
    setLocalOrder({
      ...localOrder,
      column: value,
    });
  }

  function orderFunction() {
    setOrder(localOrder);
    const mi = -1;
    if (localOrder.sort === 'ASC') {
      const newFiltered = (
        filtered.sort((a, b) => {
          if (a[localOrder.column] === 'unknown') return 1;
          if (b[localOrder.column] === 'unknown') return mi;
          return (Number(a[localOrder.column]) - Number(b[localOrder.column]));
        })
      );
      setFiltered([...newFiltered]);
    } else {
      const newFiltered = (
        filtered.sort((a, b) => {
          if (a[localOrder.column] === 'unknown') return 1;
          if (b[localOrder.column] === 'unknown') return mi;
          return (Number(b[localOrder.column]) - Number(a[localOrder.column]));
        }));
      setFiltered([...newFiltered]);
    }
  }

  return (
    <section>
      <label htmlFor="column-sort">
        Order by:
        <select
          data-testid="column-sort"
          id="column-sort"
          onChange={ (e) => onChangeDropdown(e) }
        >
          { columOrder.map((col) => (
            <option key={ col } value={ col }>{ col }</option>
          ))}
        </select>
      </label>
      <label htmlFor="column-sort-input-asc">
        Ascending:
        <input
          type="radio"
          name="order"
          value="ASC"
          data-testid="column-sort-input-asc"
          id="column-sort-input-asc"
          onChange={ (event) => onChangeRadio(event) }
        />
      </label>
      <label htmlFor="column-sort-input-desc">
        Descending:
        <input
          type="radio"
          name="order"
          value="DESC"
          data-testid="column-sort-input-desc"
          id="column-sort-input-desc"
          onChange={ (event) => onChangeRadio(event) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => orderFunction() }
      >
        Sort
      </button>
    </section>
  );
}

export default OrderComponent;
