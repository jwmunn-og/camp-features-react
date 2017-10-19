import React, { Component } from 'react';
import SubFeatures from './subfeature_list.js';

class Feature extends Component {
  state = { displayContent: false };

  handleDisplayChange = (e) =>  {
    this.setState({ displayContent: !this.state.displayContent });
  }

  render() {
    const { displayContent } = this.state;
    const feature = this.props.feature;
    const index = this.props.index;

    return (
      <li key={index}>
        <button className={feature.presence ? 'present' : 'unavailable'} onClick={this.handleDisplayChange}>
          <div className="left">
            <span className={feature.presence ? 'icon green' : 'icon red'}>{feature.presence ? '✓' : '✕'}</span>
            <span className={feature.presence ? 'present' : 'unavailable'}>{feature.title}</span>
          </div>
          <div className="right">
            <span>{feature.subfeatures.length > 0 ? '▼' : ''}</span>
          </div>
        </button>
        
        {displayContent && <SubFeatures subfeatures={feature.subfeatures} />}
    </li>
    );
  }
}

export default Feature;