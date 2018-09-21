// DEPENDENCIES
import AUTH_ACTIONS from './constants'
// CONSTANTS
const CLASSNAME = 'AuthenticationReducer';
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

        case AUTH_ACTIONS.LOGOUT:
            // TODO - Implement Logout
            return state;


        default:
            return state;
    }
}