import React, { Component } from 'react';

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleShowToolTip = this.handleShowToolTip.bind(this);
    this.handleHideToolTip = this.handleHideToolTip.bind(this);
    this.calculateGradePercentage = this.calculateGradePercentage.bind(this);
  }
  handleShowToolTip() {
    this.setState({ show: true })
  }
  handleHideToolTip() {
    this.setState({ show: false })
  }
  calculateGradePercentage(data) {
    return data / 5;
  }
  render() {
    return (
      <div
        className={this.state.show ? 'bar show' : 'bar'}
        style={{height: this.props.grade}}
        onMouseEnter={this.handleShowToolTip}
        onMouseLeave={this.handleHideToolTip}>
        <span>Bar value: {this.calculateGradePercentage(this.props.grade)}</span>
      </div>
    );
  }
}

export default Bar;
