import React from 'react';
import SubFeature from './subfeature.js';
import Icon from './icon.js';

const SubFeatures = ({ subfeatures, displayContent, onDisplayChange, index }) => (
  <ul className="subFeatures">
    {subfeatures.map((subfeature, index) => (
      <li key={index}>
        <div className='left'>
          <Icon feature={subfeature} />
          <span className={subfeature.presence ? 'present' : 'unavailable'}>
            {subfeature.title}
          </span>
          <SubFeature data={subfeature.subfeatures} index={index} />
        </div>
      </li>
    ))}
  </ul>
);

export default SubFeatures;