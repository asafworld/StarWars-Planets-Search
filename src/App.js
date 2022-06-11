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
      <section className="filter-order-section">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="star wars logo" />
        <NumericFilters />
        <OrderComponent />
      </section>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
