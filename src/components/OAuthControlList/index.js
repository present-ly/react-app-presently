import React, {Component} from 'react';
import _ from 'lodash';
// Provider Config
import OAuthProviderConfigList from '../../services/Auth/Authentication/OAuthProviderConfig';

const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class LoginPanel extends Component {
  constructor(props) {
    super(props);
    // Methods
    this.defaultNulledProps = this.defaultNulledProps.bind(this);
    this.displayOAuthControls = this.displayOAuthControls.bind(this);
    this.notConfiguredMessage = this.notConfiguredMessage.bind(this);
    // Properties
    this.props = this.defaultNulledProps(props);
    this.state = {};
  }

  componentDidMount() {
    if (TESTING && TESTING_LIFE_CYCLE) { console.log(`${this.constructor.name}.componentDidMount()`); }
  }

  defaultNulledProps(props) {
    let result = Object.assign({}, props);
    if (!props.isSignUp) {
      result.isSignUp = false;
    }
    return result;
  }

  displayOAuthControls(oAuthProviderConfigList, isSignUp) {
    return _.map(oAuthProviderConfigList, (oAuthProvider) => {
      const clickAction = isSignUp ? oAuthProvider.signUpHandler : oAuthProvider.loginHandler;
      return (
        <div className="form-group">
          <button className="btn btn-primary form-control" onClick={clickAction || (() => this.notConfiguredMessage(oAuthProvider.name))}><span className={`logo-idp ${oAuthProvider.iconClass}`}> </span> Login with {oAuthProvider.name}</button>
        </div>
      );
    });
  }

  notConfiguredMessage(providerName) {
    const context = this.props.isSignUp ? 'Sign Up' : 'Login';
    console.error(`The Click Handler for '${context}' is not registered for OAuth Provider: ${providerName}`);
  }

  render() {
    return (
      <div className="group-identity-providers">
        {this.displayOAuthControls(OAuthProviderConfigList, this.props.isSignUp)}
      </div>
    );
  }
}