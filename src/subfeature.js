import React from 'react';
import Icon from './icon.js';

const SubFeature = ({ data, index }) => (
  <ul className="SubFeatures">
    {data.map((feature, index) => (
      <li key={index}>
        <Icon feature={feature} />
        {feature.title}
      </li>
    ))}
  </ul>
);

export default SubFeature;