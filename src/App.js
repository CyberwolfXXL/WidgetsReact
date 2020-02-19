import React from 'react';
import './App.css';
import MyPanel from './panels.js';

function App() {
  return (
    <div className="App">
      <MyPanel name="Item1" panelWidth="1" />
      <MyPanel name="Item2" panelWidth="2" />
      <MyPanel name="Item3" panelWidth="3" />
      <MyPanel name="Item4" panelWidth="4" />
      <MyPanel name="Item5" panelWidth="1" />
      <MyPanel name="Item6" panelWidth="3" />
    </div>
  );
}

export default App;
