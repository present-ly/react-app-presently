// DEPENDENCIES
import AUTH_ACTIONS from './constants'
// CONSTANTS
const CLASSNAME = 'InvitationReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        
        case AUTH_ACTIONS.INVITE_EMAIL:
            // TODO - Implement Custom Login Reducer
            return state;

        case AUTH_ACTIONS.INVITE_OAUTH:
            // TODO - Implement OAuth Login Reducer
            return state;


        default:
            return state;
    }
}