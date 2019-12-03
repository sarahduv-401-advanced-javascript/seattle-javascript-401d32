import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list.js';

function App() {
  return (
    <div className="App">
      <h1>Shopping List App</h1>
      <List storeName="Target"/>
      <List storeName="Whole Foods"/>
    </div>
  );
}

export default App;
