import React, {Component} from 'react';
// CSS
import './LoginControlContainer.css';
// Child Components
import LoginPanelHeader from '../LoginPanelHeader';
import LoginControlOAuth from '../OAuthControlList';
import LoginControlCustom from '../LoginControlCustom';
import LoginPanelFooter from '../LoginPanelFooter';

const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class LoginControlContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    // Methods
  }

  componentDidMount() {
    if (TESTING && TESTING_LIFE_CYCLE) { console.log(`${this.constructor.name}.componentDidMount()`); }
  }

  render() {
    return (
      <div className="container-login-controls">
        {/* Header */}
        <LoginPanelHeader auth={this.auth} {...this.props} />
        {/* Identity Providers */}
        <LoginControlOAuth auth={this.auth} {...this.props} />
        {/* Custom Login */}
        <LoginControlCustom auth={this.auth} {...this.props} />
        {/* Horizontal Rule */}
        <hr/>
        {/* Footer */}
        <LoginPanelFooter auth={this.auth} toggleSignUp={this.props.toggleSignUp} {...this.props} />
      </div>
    );
  }
}