import React, { Component } from 'react';
import Bar from './Bar';
import Buttons from './Buttons';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataOne: [83,42,96,55,70,60,98,81],
      dataTwo: [30,63,80,77,98,72,75,68,89,90,52,66,45],
      currentDataSet: []
    };
    this.handleDataSetOne = this.handleDataSetOne.bind(this);
    this.handleDataSetTwo = this.handleDataSetTwo.bind(this);
  }
  componentWillMount() {
    this.setState({ currentDataSet: this.convertData(this.state.dataOne)});
  }
  handleDataSetOne() {
    this.setState({ currentDataSet: this.convertData(this.state.dataOne)});
  }
  handleDataSetTwo() {
    this.setState({ currentDataSet: this.convertData(this.state.dataTwo)});
  }
  convertData(data) {
    return data.map(d => d * 5);
  }
  render() {
    return (
      <div className="chart-container">
        <h1>Beautiful Bars</h1>
        <div className="chart">
          {this.state.currentDataSet.map(d => {
            return <Bar grade={d} />
          })}
        </div>
        <Buttons
          handleSetOne={this.handleDataSetOne}
          handleSetTwo={this.handleDataSetTwo} />
      </div>
    );
  }
}

export default Chart;
