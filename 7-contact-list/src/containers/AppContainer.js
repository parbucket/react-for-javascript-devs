import React, { Component } from 'react';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    const username = localStorage.getItem('username');
    this.state = {
      username: username
    };
  }
  render() {
    return (
      <div className="app-container">
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;
