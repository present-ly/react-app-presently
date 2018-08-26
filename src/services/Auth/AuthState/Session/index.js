// DEPENDENCIES
import _ from 'lodash';
import KEYS_LOCAL_STORAGE from '../LocalStorage/LocalStorageKeys';
// TESTING
const TESTING = true;
const LOG_INIT = true;
const LOG_ENTRY = true;
const LOG_SEQUENCE = true;

export class Session {
  /*********************** CONSTRUCTOR - START ***********************/
  constructor(authResult) {
    if (TESTING && LOG_INIT) {
      console.log(`NEW ${this.constructor.name}(authResult)`, authResult);
    }
    // Methods
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.clearLocalStorage = this.clearLocalStorage.bind(this);
    this.computeExpiration = this.computeExpiration.bind(this);
    this.close = this.close.bind(this);
    // Properties
    this.expiration = this.computeExpiration(authResult);
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.setLocalStorage(authResult);

  }

  /*********************** CONSTRUCTOR - END ***********************/
  /*********************** HELPER METHODS - START ***********************/
  setLocalStorage(authResult) {
    console.log('SETTING LocalStorage', authResult);
    localStorage.setItem(KEYS_LOCAL_STORAGE.ACCESS_TOKEN, authResult.accessToken);
    localStorage.setItem(KEYS_LOCAL_STORAGE.ID_TOKEN, authResult.idToken);
    localStorage.setItem(KEYS_LOCAL_STORAGE.EXPIRATION, this.computeExpiration(authResult));
  }

  clearLocalStorage() {
    if (TESTING && LOG_ENTRY) {
      console.log('Session clearing Local Storage...');
    }
    _.each(KEYS_LOCAL_STORAGE, (value, key) => {
      if (TESTING && LOG_SEQUENCE) {
        console.log(`Removing LS '${key}' at key: ${value}`);
      }
      localStorage.removeItem(value);
    });
  }

  computeExpiration(authResult) {
    return JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
  }

  /*********************** HELPER METHODS - END ***********************/
  /*********************** CONVENIENCE METHODS - START ***********************/
  close() {
    if (TESTING && LOG_ENTRY) {
      console.log(`${this.constructor.name}.close()`);
    }
    this.clearLocalStorage();
  }

  /*********************** CONVENIENCE METHODS - END ***********************/
  /*********************** ACCESSOR METHODS - START ***********************/
  get expiration() {
    return this._expiration;
  }

  set expiration(epcotTime) {
    this._expiration = epcotTime;
  }

  get accessToken() {
    return this._accessToken;
  }

  set accessToken(token) {
    this._accessToken = token;
  }

  get idToken() {
    return this._idToken;
  }

  set idToken(token) {
    this._idToken = token;
  }

  get userAuthProfile() {
    return this._userAuthProfile;
  }

  set userAuthProfile(profile) {
    this._userAuthProfile = profile;
  }

  /*********************** ACCESSOR METHODS - START ***********************/
}