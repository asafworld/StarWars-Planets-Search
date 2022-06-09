import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data,
    filterByName,
    filterByNumericValues,
    filtered,
    setFiltered } = useContext(StarWarsContext);

  const filterByNumber = () => {
    const newFilByName = (
      data.filter((plan) => plan.name.toLowerCase().includes(filterByName.name))
    );
    const newFiltered = filterByNumericValues.reduce((acc, curr) => acc
      .filter((plan) => {
        switch (curr.comparison) {
        case 'maior que':
          return Number(plan[curr.column]) > Number(curr.value);
        case 'menor que':
          return Number(plan[curr.column]) < Number(curr.value);
        case 'igual a':
          return Number(plan[curr.column]) === Number(curr.value);
        default: return data;
        }
      }), newFilByName);
    setFiltered(newFiltered);
  };

  useEffect(() => {
    filterByNumber();
  }, [data, filterByName, filterByNumericValues]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          filtered.map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
