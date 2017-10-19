import React from 'react';

const SubFeatures = ({ subfeatures, displayContent, onDisplayChange, index }) => (
  <div>
    <ul className="subFeatures">
      {subfeatures.map((subfeature, index) => (
        <li key={index}>
          {subfeature.presence ? '✓' : '✕'} {subfeature.title}
        </li>
      ))}
    </ul>
  </div>
);

export default SubFeatures;