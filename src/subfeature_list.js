import React from 'react';

const SubFeatures = ({ subfeatures, displayContent, onDisplayChange, index }) => (
  <div>
    <ul className="subFeatures">
      {subfeatures.map((subfeature, index) => (
        <li key={index}>
          <span className={subfeature.presence ? 'icon green' : 'icon red'}>{subfeature.presence ? '✓' : '✕'}</span>
          <div className='left'>
            <span className={subfeature.presence ? 'present' : 'unavailable'}>
              {subfeature.title}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default SubFeatures;