import React, {useState, useEffect} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import ShipsHome from './ShipsHome'

function App() {
  return (
    <div className="App">
        <nav>
          <Link to="/">Go Back to Home</Link>
        </nav>
        <Route exact path="/" component={ShipsHome} />
    </div>
  );
}

export default App;
