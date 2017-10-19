import React from 'react';

function Icon({ feature }) {
  let icon = '✓';
  let color = 'green'
  if(!feature.presence) {
    icon = '✕';
    color = 'red'
  }

  return (
    <span className={`icon ${color}`}>{icon}</span>
  );
}

export default Icon;