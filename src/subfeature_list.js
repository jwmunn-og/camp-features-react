import React from 'react';
import Feature from './feature.js';
import Icon from './icon.js';

const SubFeatures = ({ subfeatures, displayContent, onDisplayChange, index }) => (
  <ul className="subFeatures">
    {subfeatures.map((subfeature, index) => (
      <li key={index}>
        <Icon feature={subfeature} />
        <div className='left'>
          <span className={subfeature.presence ? 'present' : 'unavailable'}>
            {subfeature.title}
          </span>
        </div>
      </li>
    ))}
  </ul>
);

export default SubFeatures;