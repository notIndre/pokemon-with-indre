import React from 'react';
import './App.css';
import Card from './Card'
import GridWrapper from './GridWrapper'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <GridWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </GridWrapper> 
    </div>
  );
}

export default App;
