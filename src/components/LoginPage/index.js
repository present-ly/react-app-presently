import React, {Component} from 'react';
// CSS
import './LoginPage.css';
// Child Components
import LoginPanel from '../LoginPanel';
import LoginPageContent from '../LoginPageContent';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isSignUp: false
    };
    // Methods
  }

  componentDidMount() {
    console.log('componentDidMount()');
    this.props.auth.getUserAuthProfile()
      .then((userAuthProfile) => {
        this.setState({
          userAuthProfile: userAuthProfile
        });
        console.log('STATE', this.state);
      })
      .catch((err) => {
        console.error('ERR - getProfile()', err);
        this.setState({
          userAuthProfile: null
        });
      });
  }



  render() {
    return (
      <div className="container-fluid no-pad fill-height">
        <div className="col-xs-12 col-sm-6 col-md-4 no-pad container-login fill-height">
          <div className="wrapper-login-panel">
            <LoginPanel auth={this.props.auth} {...this.props} />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-8 container-login-market-board fill-height">
          <LoginPageContent {...this.props} />
        </div>
      </div>
    );
  }
}