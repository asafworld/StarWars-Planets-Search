import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import InputName from './components/InputName';
import NumericFilters from './components/NumericFilters';
import OrderComponent from './components/OrderComponent';

function App() {
  return (
    <StarWarsProvider>
      <InputName />
      <NumericFilters />
      <OrderComponent />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
