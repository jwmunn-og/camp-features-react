import React, { Component } from 'react';
import FEATURES from './camp_features.js';
import './App.css';

class App extends Component {
  render() {
    const camp_features = FEATURES;
    console.log(camp_features);

    return (
      <div className="App">
        Hello World.
      </div>
    );
  }
}

export default App;