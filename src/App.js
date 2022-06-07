import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import InputName from './components/InputName';

function App() {
  return (
    <StarWarsProvider>
      <InputName />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
