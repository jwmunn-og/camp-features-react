import React from 'react';

function Chevron({ feature, displayContent }) {
  const hasSubFeatures = feature.subfeatures.length > 0;
  let icon = '';

  if (hasSubFeatures && displayContent) {
    icon = 'lnr-chevron-up'
  }
  if (hasSubFeatures && !displayContent) {
    icon = 'lnr-chevron-down'
  }

  return (
    <div className="right">
      <span className={`lnr ${icon}`}></span> 
    </div>
  );
}

export default Chevron;