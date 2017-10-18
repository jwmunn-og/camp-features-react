import React from 'react';
import SubFeatures from './subfeature_list.js';

function FeaturesList({features}) {
  return(
    <div>
      <h2>Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            {feature.title} {feature.presence ? '✓' : '✕'}
            <SubFeatures subfeatures={feature.subfeatures} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturesList;