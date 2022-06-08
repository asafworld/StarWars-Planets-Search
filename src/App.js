import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import InputName from './components/InputName';
import NumericFilters from './components/NumericFilters';

function App() {
  return (
    <StarWarsProvider>
      <InputName />
      <NumericFilters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
