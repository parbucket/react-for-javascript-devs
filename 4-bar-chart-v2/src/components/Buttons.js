import React from 'react';

const Buttons = (props) => {
  return (
    <div className="buttons-container">
      <button onClick={props.handleSetOne}>Data set 1</button>
      <button onClick={props.handleSetTwo}>Data set 2</button>
    </div>
  );
}

export default Buttons;
