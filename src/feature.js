import React, { Component } from 'react';
import SubFeatures from './subfeature_list.js';
import Icon from './icon.js';
import Chevron from './chevron.js';

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
            <Icon feature={feature} />
            <span className={feature.presence ? 'present' : 'unavailable'}>{feature.title}</span>
          </div>
          <Chevron feature={feature} displayContent={displayContent} />
        </button>
        
        {displayContent && <SubFeatures subfeatures={feature.subfeatures} />}
    </li>
    );
  }
}

export default Feature;