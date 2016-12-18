import React from 'react';
import PinCountIcon from './PinCountIcon';

const TextDetails = (props) => {
  return (
    <div className="text-details">
      <div className="title-pin-container">
        <h1>{props.title}</h1>
        <PinCountIcon repinned={props.repinned} />
      </div>
      <p>{props.main_content}</p>
    </div>
  );
}

export default TextDetails;
