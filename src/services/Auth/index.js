import Authenticator from './Authentication/Auth0';
import {Session} from "./AuthState/Session";
import {UserAuthProfile} from "./AuthState/UserAuthProfile";
import history from "../History";

export default class Auth {

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    // PROPERTIES
    this.Authenticator = new Authenticator();
  }

  login() {
    this.Authenticator.login();
  }

  logout() {
    if (this.session) {
      this.session.close();
      this.session = null;
    }
    if (this.userAuthProfile) {
      this.userAuthProfile.clear();
      this.userAuthProfile = null;
    }
    history.replace('/login');
  }

  handleAuthentication() {
    return this.Authenticator.handleAuthentication()
      .then((authResult) => {
        console.log("*** authResult", authResult);
        this.session = authResult;
        this.userAuthProfile = authResult;
        return this.userAuthProfile;
      })
      .catch((err) => {
        console.error('ERR - handleAuthentication()', err);
        return err;
      });
  }

  getUserAuthProfile() {
    return new Promise((resolve, reject) => {
      if (this.userAuthProfile) {
        resolve(this.userAuthProfile);
      } else {
        reject({
          message: 'No User Auth Profile'
        });
      }
    });
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    if (this.session && this.userAuthProfile) {
      return new Date().getTime() < this.session.expiration;
    } else {
      return false;
    }
  }

  get session() {
    return this._session;
  }

  set session(authResult) {
    console.log('SETTING SESSION');
    authResult ? this._session = new Session(authResult) : this._session = null;
  }
  get userAuthProfile() {
    return this._userAuthProfile;
  }

  set userAuthProfile(authResult) {
    authResult ? this._userAuthProfile = new UserAuthProfile(authResult) : this._userAuthProfile = null;
  }
}
