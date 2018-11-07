// DEPENDENCIES
import ACTIONS from './constants';
// CONSTANTS
const CLASSNAME = 'UserProfileReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        case ACTIONS.EDIT_USER_PROFILE:
            // TODO - Implement User Profile Reducer
            return state;

        case ACTIONS.SAVE_USER_PROFILE:
            // TODO - Implement User Profile Reducer
            return state;


        default:
            return state;
    }
}