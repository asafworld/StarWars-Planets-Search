import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../API/FetchPlanets';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const state = {
    data,
    setData,
    order,
    setOrder,
    filtered,
    setFiltered,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = await fetchPlanets();
      setData(newData.results);
      setFiltered(newData.results.sort((a, b) => {
        const minus = -1;
        return a.name > b.name ? 1 : minus;
      }));
    };
    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider value={ state }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StarWarsProvider;

// {
//   column: '',
//   comparison: '',
//   value: '',
// }
