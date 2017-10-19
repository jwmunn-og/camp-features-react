import React from 'react';

const SubFeatures = ({ subfeatures, displayContent, onDisplayChange, index }) => (
  <div>
    <ul className="subFeatures">
      {subfeatures.map((subfeature, index) => (
        <li key={index}>
          {subfeature.title} {subfeature.presence ? '✓' : '✕'}
        </li>
      ))}
    </ul>
  </div>
);

export default SubFeatures;