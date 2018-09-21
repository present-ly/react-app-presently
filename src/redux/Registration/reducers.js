// DEPENDENCIES
import AUTH_ACTIONS from './constants';
// CONSTANTS
const CLASSNAME = 'RegistrationReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {

        case AUTH_ACTIONS.SIGN_UP_CUSTOM:
            // TODO - Implement Custom Sign Up
            return state;

        case AUTH_ACTIONS.SIGN_UP_OAUTH:
            // TODO - Implement OAuth Sign Up
            return state;


        default:
            return state;
    }
}