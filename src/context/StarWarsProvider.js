import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../API/FetchPlanets';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([
    {
      column: '',
      comparison: '',
      value: '',
    }]);

  const state = {
    data,
    setData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = await fetchPlanets();
      setData(newData.results);
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
