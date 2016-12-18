import React from 'react';

const RadiusControl = (props) => {
  return (
    <div className="controls-container radius">
      <div className="input-block">
        <input
          type="range"
          min={0}
          max={200}
          value={props.radiusOnRadiusControl}
          onChange={props.onRadiusChange} />
        <label>Radius: {props.radiusOnRadiusControl}</label>
      </div>
    </div>
  );
}

export default RadiusControl;
