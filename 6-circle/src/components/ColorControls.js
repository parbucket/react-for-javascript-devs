import React from 'react';

const ColorControls = (props) => {
  return (
    <div className="controls-container">
      <div className="input-block">
        <input
          value={props.red}
          onChange={props.onRedChangeInner}
          type="range"
          min={0}
          max={255} />
        <label>R</label>
      </div>
      <div className="input-block">
        <input
          value={props.green}
          onChange={props.onGreenChangeInner}
          type="range"
          min={0}
          max={255} />
        <label>G</label>
      </div>
      <div className="input-block">
        <input
          value={props.blue}
          onChange={props.onBlueChangeInner}
          type="range"
          min={0}
          max={255} />
        <label>B</label>
      </div>
      <div className="input-block">
        <input
          value={props.alpha}
          onChange={props.onAlphaChangeInner}
          type="range"
          step={0.01}
          min={0}
          max={1} />
        <label>A</label>
      </div>
    </div>
  );
}

export default ColorControls;
