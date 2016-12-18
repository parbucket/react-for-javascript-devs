import React, { Component } from 'react';


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    }
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleNameInputChange = this.handleNameInputChange.bind(this);
  }
  handleLogIn(e) {
    e.preventDefault();
    localStorage.setItem('username', this.state.username);
    this.context.router.transitionTo('/contacts');
  }
  handleNameInputChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div className="form-page" onSubmit={this.handleLogIn}>
        <form className="centered">
          <h2 className="text-center">Welcome!</h2>
          <h4 className="text-center">Please enter your name.</h4>
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder="Name"
              onChange={this.handleNameInputChange} />
          </div>
          <button type="submit" className="btn btn-primary float-right">Submit</button>
        </form>
      </div>
    );
  }
}

LogIn.contextTypes = {
  router: React.PropTypes.object
};

export default LogIn;
