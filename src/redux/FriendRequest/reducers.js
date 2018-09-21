// DEPENDENCIES
import AUTH_ACTIONS from './constants'
// CONSTANTS
const CLASSNAME = 'AuthReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        case AUTH_ACTIONS.LOGIN_CUSTOM:
            // TODO - Implement Custom Login Reducer
            return state;

        case AUTH_ACTIONS.LOGIN_OAUTH:
            // TODO - Implement OAuth Login Reducer
            return state;

        case AUTH_ACTIONS.SIGN_UP_CUSTOM:
            // TODO - Implement Custom Sign Up
            return state;

        case AUTH_ACTIONS.SIGN_UP_OAUTH:
            // TODO - Implement OAuth Sign Up
            return state;

        case AUTH_ACTIONS.AUTHORIZE:
            // TODO - Implement Authorization
            return state;

        case AUTH_ACTIONS.LOGOUT:
            // TODO - Implement Logout
            return state;


        default:
            return state;
    }
}