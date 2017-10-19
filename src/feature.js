import React, { Component } from 'react';
import SubFeatures from './subfeature_list.js';
import Icon from './icon.js';

function Chevron({ feature, statecheck }) {
  const displayContent = statecheck;
  const hasSubFeatures = feature.subfeatures.length > 0;
  let icon = '';

  if (hasSubFeatures && displayContent) {
    icon = '▲'
  }
  if (hasSubFeatures && !displayContent) {
    icon = '▼'
  }

  return (
    <div className="right">
      <span>{icon}</span>
    </div>
  );
}

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
          <Chevron feature={feature} statecheck={displayContent} />
        </button>
        
        {displayContent && <SubFeatures subfeatures={feature.subfeatures} />}
    </li>
    );
  }
}

export default Feature;