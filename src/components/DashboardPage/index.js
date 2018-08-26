import React, { Component } from 'react';

export default class DashboardPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  displayUsername() {
      return (this.state.userAuthProfile && this.state.userAuthProfile.name) || 'You'
  }

  componentDidMount() {
    console.log('componentDidMount()');
    this.props.auth.getUserAuthProfile()
        .then((userAuthProfile) => {
            this.setState({
                userAuthProfile: userAuthProfile.profile
            })
            console.log('STATE', this.state);
        })
        .catch((err) => {
          console.error('ERR - No Profile, Routing back to Login Page', err);
          this.setState({
              userAuthProfile: null
          });
        });
  }

  render() {
    return (
      <div className="container">
          <h4>
              {this.displayUsername()} are logged in!
          </h4>
      </div>
    );
  }
}
