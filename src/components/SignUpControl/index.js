import React, {Component} from 'react';
// Child Components
import SignUpControlCustom from '../SignUpControlCustom';
import OAuthControlList from '../OAuthControlList';
// CONSTANTS
const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class SignUpControl extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    // Methods
    this.signUpClickHandler = this.signUpClickHandler.bind(this);
  }

  componentDidMount() {
    if (TESTING && TESTING_LIFE_CYCLE) { console.log(`${this.constructor.name}.componentDidMount()`); }
  }

  signUpClickHandler() {
    alert('Not Implemented - Sign Up Click Handler');
  }

  render() {
    return (
      <div className="sign-up-control">
        {/* OAuth Sign Up */}
        <h3>We can keep this simple...</h3>
        <OAuthControlList isSignUp={true} {...this.props} />
        {/* Custom Sign Up */}
        <h3>Or tell us about yourself...</h3>
        <SignUpControlCustom cbSignUp={this.signUpClickHandler} {...this.props} />
      </div>
    );
  }
}