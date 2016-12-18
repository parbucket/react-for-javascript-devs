import React from 'react';
import RadiusControl from './RadiusControl';
import ColorControls from './ColorControls';

const Controls = (props) => {
  return (
    <div className="controls">
      <RadiusControl
        onRadiusChange={props.onRadiusChangeFromControlComponent}
        radiusOnRadiusControl={props.radiusOnControl} />
      <ColorControls
        onRedChangeInner={props.onRedChange}
        onGreenChangeInner={props.onGreenChange}
        onBlueChangeInner={props.onBlueChange}
        onAlphaChangeInner={props.onAlphaChange}
        red={props.red}
        green={props.green}
        blue={props.blue}
        alpha={props.alpha} />
    </div>
  );
}

export default Controls;
