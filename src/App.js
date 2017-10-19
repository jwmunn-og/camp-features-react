import React, { Component } from 'react';
import FEATURES from './camp_features.js';
import FeatureList from './feature_list.js';
import './App.css';

class App extends Component {
  render() {
    const camp_features = FEATURES;

    return (
      <FeatureList features={camp_features} />
    );
  }
}

export default App;