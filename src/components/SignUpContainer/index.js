import React, {Component} from 'react';
// Child Components
import SignUpControl from '../SignUpControl';
import './SignUpContainer.css';

const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Methods
  }

  componentDidMount() {
    if (TESTING && TESTING_LIFE_CYCLE) { console.log(`${this.constructor.name}.componentDidMount()`); }
  }

  render() {
    return (
      <div className="container-sign-up">
        {/* Sign Up Control */}
        <SignUpControl auth={this.auth} {...this.props} />
      </div>
    );
  }
}
