import React, { Component } from 'react';
import Circle from './Circle';
import Controls from './Controls';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      radius: 115,
      red: 105,
      green: 185,
      blue: 205,
      alpha: 1
    }

    this.handleRadiusChange = this.handleRadiusChange.bind(this);
    this.handleRedChange = this.handleRedChange.bind(this);
    this.handleGreenChange = this.handleGreenChange.bind(this);
    this.handleBlueChange = this.handleBlueChange.bind(this);
    this.handleAlphaChange = this.handleAlphaChange.bind(this);
  }

  handleRadiusChange(e) {
    this.setState({
      radius: e.target.value
    })
  }

  handleRedChange(e) {
    this.setState({
      red: e.target.value > 255 ? 255 : e.target.value
    })
  }

  handleGreenChange(e) {
    this.setState({
      green: e.target.value > 255 ? 255 : e.target.value
    })
  }

  handleBlueChange(e) {
    this.setState({
      blue: e.target.value > 255 ? 255 : e.target.value
    })
  }

  handleAlphaChange(e) {
    this.setState({
      alpha: e.target.value > 1 ? 1 : e.target.value
    })
  }

  render() {
    return (
      <div className="app-container">
        <h1>✨ Magic Circle ✨</h1>
        <div className="circle-container">
          <Controls
            red={this.state.red}
            green={this.state.green}
            blue={this.state.blue}
            alpha={this.state.alpha}
            onRedChange={this.handleRedChange}
            onGreenChange={this.handleGreenChange}
            onBlueChange={this.handleBlueChange}
            onAlphaChange={this.handleAlphaChange}
            onRadiusChangeFromControlComponent={this.handleRadiusChange}
            radiusOnControl={this.state.radius} />
          <Circle
            radius={this.state.radius}
            red={this.state.red}
            green={this.state.green}
            blue={this.state.blue}
            alpha={this.state.alpha} />
        </div>
      </div>
    );
  }
}

export default App;
