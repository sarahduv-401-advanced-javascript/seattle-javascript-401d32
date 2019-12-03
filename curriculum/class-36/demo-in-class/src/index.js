import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './style.scss';

import App from './components/app';



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
