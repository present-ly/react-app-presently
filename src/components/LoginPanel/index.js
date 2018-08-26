import React, {Component} from 'react';
// Component CSS
import './LoginPanel.css';
// Child Components
import LoginControlContainer from "../LoginControlContainer";
import SignUpContainer from "../SignUpContainer";

const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isSignUp: false
    };
    // Methods
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  componentDidMount() {
    if (TESTING && TESTING_LIFE_CYCLE) { console.log(`${this.constructor.name}.componentDidMount()`); }
  }

  toggleSignUp() {
    this.setState({
      isSignUp: !this.state.isSignUp
    });
  }

  render() {
    return (
      <div className="panel-login">
        <div className="panel-control-bar">
          { this.state.isSignUp ? <span className="p-10 glyphicon glyphicon-chevron-left" onClick={this.toggleSignUp}> Back</span> : '' }
        </div>
        {
          !this.state.isSignUp ?
          <LoginControlContainer auth={this.auth} toggleSignUp={this.toggleSignUp} {...this.props} /> :
          <SignUpContainer auth={this.auth} toggleSignUp={this.toggleSignUp} {...this.props} />
        }
      </div>
    );
  }
}