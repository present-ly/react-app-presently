import React, {Component} from 'react';

const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class LoginPanelFooter extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  componentDidMount() {
    if (TESTING && TESTING_LIFE_CYCLE) { console.log(`${this.constructor.name}.componentDidMount()`); }
  }

  render() {
    return (
      <div className="footer-login-panel">
        {/* Sign-up */}
        <div className="text-center container-sign-up">
          <div className="form-group">
            <label name="sign-up">Don't have an account?</label>
          </div>
          {/* Sign Up Button */}
          <button className="btn btn-primary form-control" onClick={this.props.toggleSignUp}>Create Account</button>
        </div>
      </div>
    );
  }
}