import React, { Component } from 'react';

class Bar extends Component {
  render() {
    return (
      <div
        className="bar"
        style={{height: this.props.grade}}></div>
    );
  }
}

export default Bar;
