import React, { Component } from 'react';
import SubFeatures from './subfeature_list.js';

class Feature extends Component {
  state = {displayContent: false};

  handleDisplayChange = (e) =>  {
    console.log(this);
    this.setState({ displayContent: !this.state.displayContent });
  }

  render() {
    const { displayContent } = this.state;
    const feature = this.props.feature;
    const index = this.props.index;
    return (
      <li key={index}>
        {feature.presence ? '✓' : '✕'} {feature.title} &nbsp;
        <button onClick={this.handleDisplayChange}>
          Display SubFeatures
        </button>
        {/*<SubFeatures subfeatures={feature.subfeatures} />*/}
        {displayContent && <SubFeatures subfeatures={feature.subfeatures} />}
    </li>
    );
    
  }
}

export default Feature;