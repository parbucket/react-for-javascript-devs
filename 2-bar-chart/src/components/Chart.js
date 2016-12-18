import React, { Component } from 'react';
import Bar from './Bar';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [83,42,96,55,70,60,98,81]
    };
  }
  componentWillMount() {
    const caluclatedData = this.state.data.map(d => d * 5);
    this.setState({
      caluclatedData: caluclatedData
    })
  }
  render() {
    return (
      <div className="chart-container">
        <h1>Beautiful Bars</h1>
        <div className="chart">
          {this.state.caluclatedData.map(d => {
            return <Bar grade={d} />
          })}
        </div>
      </div>
    );
  }
}

export default Chart;
