import auth0 from "auth0-js";
import {AUTH_CONFIG} from "./auth0-variables";

export default class Authenticator {
  constructor() {
    this.connection = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      redirectUri: AUTH_CONFIG.callbackUrl,
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid profile email'
    });
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  login() {
    console.log('Auth0.login');
    this.connection.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.connection.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          resolve(authResult);
        } else if (err) {
          reject(err);
        }
        else {
          reject({
            message: 'Authentication Response does not contain Auth Tokens',
            response: authResult
          });
        }
      });
    });
  }
}