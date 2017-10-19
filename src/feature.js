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
        <button onClick={this.handleDisplayChange}>
          {feature.presence ? '✓' : '✕'} {feature.title} &nbsp;
          Display SubFeatures
        </button>
        {displayContent && <SubFeatures subfeatures={feature.subfeatures} />}
    </li>
    );
  }
}

export default Feature;