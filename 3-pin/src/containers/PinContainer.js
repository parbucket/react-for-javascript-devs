import React, { Component } from 'react';
import axios from 'axios';
import Pin from '../components/Pin';

import '../index.css';

class PinContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: []
    };
  }
  componentDidMount() {
    axios.get('./pins.json')
      .then(pins => {
        this.setState({ pins: pins.data })
      })
  }
  render() {
    return (
      <div className="app-container">
        <h1 className="title">Cat Board</h1>
        <div className="pin-container">
          {this.state.pins.map(p => {
            return <Pin key={p.pin.id} pinData={p} />
          })}
        </div>
      </div>
    );
  }
}

export default PinContainer;
