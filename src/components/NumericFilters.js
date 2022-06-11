import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const columnArr = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const operationArr = [
  'maior que',
  'menor que',
  'igual a',
];

function NumericFilters() {
  const { filterByNumericValues,
    setFilterByNumericValues } = useContext(StarWarsContext);

  const [column, setColumn] = useState(filterByNumericValues.map((filt) => filt.column));
  const [columnEntries, setColumnEntries] = useState(columnArr);
  const [filterInfo, setfilterInfo] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  useEffect(() => {
    setColumn(filterByNumericValues.map((filt) => filt.column));
  }, [filterByNumericValues]);

  const onChangeFunc = ({ target }) => {
    setfilterInfo({
      ...filterInfo,
      [target.name]: target.value,
    });
  };

  const changeColumn = () => {
    let filteredColumn = [];
    if (column.length > 0) {
      filteredColumn = columnEntries.filter((item) => item !== filterInfo.column);
      setfilterInfo({
        column: filteredColumn[0],
        comparison: 'maior que',
        value: 0,
      });
      setColumnEntries(filteredColumn);
    } else {
      const newFiltered = columnEntries.filter((item) => item !== filterInfo.column);
      setfilterInfo({
        column: newFiltered[0],
        comparison: 'maior que',
        value: 0,
      });
      setColumnEntries(newFiltered);
    }
  };

  return (
    <div className="numeric-filters">
      <label htmlFor="column-filter" className="select-label">
        Column
        <select
          data-testid="column-filter"
          className="form-select"
          id="column-filter"
          name="column"
          value={ filterInfo.column }
          onChange={ (event) => onChangeFunc(event) }
        >
          { columnEntries.map((col) => (
            <option key={ col } value={ col }>{ col }</option>
          )) }
        </select>
      </label>
      <label htmlFor="comparison-filter" className="select-label">
        Operation
        <select
          data-testid="comparison-filter"
          className="form-select"
          id="comparison-filter"
          name="comparison"
          value={ filterInfo.comparison }
          onChange={ (event) => onChangeFunc(event) }
        >
          { operationArr.map((opt) => (
            <option key={ opt } value={ opt }>{ opt }</option>
          )) }
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          className="form-control"
          id="value-filter"
          name="value"
          value={ filterInfo.value }
          onChange={ (event) => onChangeFunc(event) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        className="btn btn-dark"
        onClick={ () => {
          setFilterByNumericValues([
            ...filterByNumericValues,
            filterInfo,
          ]);
          changeColumn();
        } }
      >
        Filter
      </button>

      { filterByNumericValues.map((obj) => (
        <ul key={ obj.name }>
          <li data-testid="filter">
            <p>{obj.column}</p>
            <p>{obj.comparison}</p>
            <p>{obj.value}</p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={ () => {
                const newFilter = (
                  filterByNumericValues.filter((filt) => filt.column !== obj.column)
                );
                setFilterByNumericValues(newFilter);
              } }
            >
              Remover
            </button>
          </li>
        </ul>
      )) }
      <button
        type="button"
        data-testid="button-remove-filters"
        className="btn btn-dark"
        onClick={ () => setFilterByNumericValues([]) }
      >
        Remover todas filtragens
      </button>
    </div>
  );
}

export default NumericFilters;
