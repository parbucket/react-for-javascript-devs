import React from 'react';

const Circle = (props) => {

  const styleObj = {
    backgroundColor: `rgba(${props.red}, ${props.green}, ${props.blue}, ${props.alpha})`,
    height: props.radius * 2,
    width: props.radius * 2
  }

  return (
    <div className="circle" style={styleObj}>
      {props.radius}
    </div>
  );
}

export default Circle;
