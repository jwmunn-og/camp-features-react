import React from 'react';

function Icon({ feature }) {
  let icon = 'lnr-checkmark-circle';
  if(!feature.presence) {
    icon = 'lnr-cross';
  }

  return (
    <span className={`lnr ${icon}`}></span>
  );
}

export default Icon;