import React, { Component } from 'react';
import Feature from './feature.js';

class FeaturesList extends Component {
  

  toggleDisplay = (feature) => {
    feature.setState({
      displayContent: !feature.state.displayContent
    });
  }

  render() {
    
    return(
      <div>
        <h2>Features</h2>
        <ul>
          {this.props.features.map((feature, index) => (
            <Feature feature={feature} index={index} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

export default FeaturesList;