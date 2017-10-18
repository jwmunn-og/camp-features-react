import React from 'react';

const SubFeatures = ({ subfeatures }) => (
  <ul className="subFeatures">
    {subfeatures.map((subfeature, index) => (
      <li key={index}>
        {subfeature.title} {subfeature.presence ? '✓' : '✕'}
      </li>
    ))}
  </ul>
);

export default SubFeatures;