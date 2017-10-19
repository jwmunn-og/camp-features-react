import React, { Component } from 'react';
import Feature from './feature.js';

class FeaturesList extends Component {
  render() {
    const features = this.props.features;

    return(
      <div className="features">
        <h2>Campground Features</h2>
        <ul>
          {features.map((feature, index) => (
            <Feature feature={feature} index={index} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

export default FeaturesList;