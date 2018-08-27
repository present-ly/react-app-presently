import React, {Component} from 'react';

const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log('props', this.props);
    this.state = {};
  }

  componentDidMount() {
    if (TESTING && TESTING_LIFE_CYCLE) { console.log(`${this.constructor.name}.componentDidMount()`); }
  }

  render() {
    return (
      <div className="text-center panel-header-login">
        <div className="panel-login-logo">
          <img src="assets/logo.png" alt="present-ly logo" />
        </div>
        <div className="panel-header-message">
          <h3>Hello!</h3>
        </div>
      </div>
    );
  }
}
