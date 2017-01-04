import React, { Component } from 'react';
import Bar from './Bar';

class Chart extends Component {
  componentWillMount() {

    this.setState({
      transformedGrades: this.props.grades.map(d => {
        return {
          id: d.student_id,
          score: d.score * 5
        }
      }) // end of map
    }) // end of setState

  }
  render() {
    return (
      <div className="chart-container">
        <h1>Beautiful Bars</h1>
        <div className="chart">
          {this.state.transformedGrades.map(d => {
            return <Bar key={d.student_id} grade={d.score} />
          })}
        </div>
      </div>
    );
  }
}

export default Chart;
