import React from 'react';
import './App.css';
import Editor from './components/editor/index.js/index.js.js.js';
import Main from './main.js';
import SettingsContext from './components/settings/site-context.js';

// const SettingsContext = React.createContext();

function App() {
  return (
    <SettingsContext>
      <Main />
    </SettingsContext>
  );
}

export default App;
