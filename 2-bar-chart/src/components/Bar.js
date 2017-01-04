import React, { Component } from 'react';

class Bar extends Component {
  render() {
    const styleObj = {
      height: this.props.grade
    };
    return (
      <div
        className="bar"
        style={styleObj}></div>
    );
  }
}

export default Bar;
