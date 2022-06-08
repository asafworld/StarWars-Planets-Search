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

  const columnFunc = () => {
    if (filterByNumericValues.length === 0) {
      return columnArr.map((opt) => (
        <option key={ opt } value={ opt }>{ opt }</option>
      ));
    }
    let test = columnArr;
    filterByNumericValues.forEach((filt) => {
      test = test.filter((opt) => opt !== filt.column);
    });

    return test.map((col) => (
      <option key={ col } value={ col }>{ col }</option>
    ));
  };

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
    <div>
      <label htmlFor="column-filter">
        Column
        <select
          data-testid="column-filter"
          id="column-filter"
          name="column"
          value={ filterInfo.column }
          onChange={ (event) => onChangeFunc(event) }
        >
          { columnFunc() }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operation
        <select
          data-testid="comparison-filter"
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
          id="value-filter"
          name="value"
          value={ filterInfo.value }
          onChange={ (event) => onChangeFunc(event) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
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
          <li>{obj.column}</li>
          <li>{obj.comparison}</li>
          <li>{obj.value}</li>
        </ul>
      )) }
    </div>
  );
}

export default NumericFilters;
