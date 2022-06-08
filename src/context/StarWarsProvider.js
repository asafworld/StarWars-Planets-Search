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

  const state = {
    data,
    setData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    filtered,
    setFiltered,
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = await fetchPlanets();
      setData(newData.results);
      setFiltered(newData.results);
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
