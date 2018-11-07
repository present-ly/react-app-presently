// DEPENDENCIES
import ACTIONS from './constants';
// CONSTANTS
const CLASSNAME = 'AuthReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        case ACTIONS.ADD_USER_OAUTH:
            // TODO - Implement Add User OAuth Reducer
            return state;

        case ACTIONS.REMOVE_USER_OAUTH:
            // TODO - Implement Remove OAuth Reducer
            return state;

        case ACTIONS.EDIT_USER_PREFERENCES:
            // TODO - Implement Edit User Preference Reducer
            return state;

        case ACTIONS.SAVE_USER_PREFERENCES:
            // TODO - Implement Save User Preferences Reducer
            return state;


        default:
            return state;
    }
}