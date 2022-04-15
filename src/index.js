import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { ApplicationViews } from './components/ApplicationViews';
import { Nutshell } from './components/Nutshell';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Nutshell />
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
