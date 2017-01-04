import React, { Component } from 'react';
import Chart from './Chart';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          student_id: 101,
          name: 'Gary Glendale',
          score: 83
        },
        {
          student_id: 102,
          name: 'Paul Perry',
          score: 42
        },
        {
          student_id: 103,
          name: 'Jameel Jennings',
          score: 96
        },
        {
          student_id: 104,
          name: 'Becky Barkson',
          score: 55
        },
        {
          student_id: 105,
          name: 'Jimmy Jimenez',
          score: 70
        },
        {
          student_id: 106,
          name: 'Kali Fornia',
          score: 60
        },
        {
          student_id: 107,
          name: 'Bob Burlap',
          score: 98
        },
        {
          student_id: 108,
          name: 'Sharice Simons',
          score: 81
        }
      ]
    };
  }
  render() {
    return (
        <Chart grades={this.state.data} />
    );
  }
}

export default App;
