// DEPENDENCIES
import _ from 'lodash';
import KEYS_LOCAL_STORAGE from '../LocalStorage/LocalStorageKeys';
// TESTING
const TESTING = true;
const LOG_INIT = true;
const LOG_ENTRY = true;
//const LOG_SEQUENCE = true;

export class UserAuthProfile {
  /*********************** CONSTRUCTOR - START ***********************/
  constructor(authResult) {
    if (TESTING && LOG_INIT) {
      console.log(`NEW ${this.constructor.name}(authResult)`, authResult);
      if (!authResult.idTokenPayload) {
        throw new Error('No Authentication Result');
      }
      if (!authResult.idTokenPayload) {
        throw new Error('No User Authentication Profile');
      }
      this._profile = this.parseProfileFromAuthResult(authResult);
      this.setLocalStorage(authResult);
      this.clear = this.clear.bind(this);
    }
  }
  /*********************** CONSTRUCTOR - END ***********************/
  /*********************** HELPER METHODS - START ***********************/
  parseProfileFromAuthResult(authResult) {
    console.log('parseProfileFromAuthResult(accessToken)', authResult);
    return authResult.idTokenPayload;
  }

  setLocalStorage(authResult) {
    localStorage.setItem(KEYS_LOCAL_STORAGE.USER_AUTH_PROFILE, JSON.stringify(authResult.idTokenPayload));
  }
  /*********************** HELPER METHODS - END ***********************/
  clearLocalStorage() {
    _.each(Object.keys(KEYS_LOCAL_STORAGE), (key) => localStorage.removeItem(key));
  }
  /*********************** HELPER METHODS - END ***********************/
  /*********************** CONVENIENCE METHODS - START ***********************/
  clear() {
    if (TESTING && LOG_ENTRY) {
      console.log(`${this.constructor.name}.clear()`);
    }
    this._profile = null;
    this.clearLocalStorage();
  }
  /*********************** CONVENIENCE METHODS - END ***********************/
  /*********************** ACCESSOR METHODS - START ***********************/
  get profile() {
    return this._profile;
  }

  set profile(profile) {
    this._profile = profile;
  }
  /*********************** ACCESSOR METHODS - START ***********************/
}