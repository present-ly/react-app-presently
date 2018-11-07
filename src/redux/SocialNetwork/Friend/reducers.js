// DEPENDENCIES
import ACTIONS from './constants'
// CONSTANTS
const CLASSNAME = 'AuthReducer'
const TESTING = true
const LOG_ENTRY = true

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        case ACTIONS.FETCH_FRIENDS:
            // TODO - Implement Fetch Friends Reducer
            return state;

        case ACTIONS.REMOVE_FRIEND:
            // TODO - Implement Remove Friend Reducer
            return state;

        case ACTIONS.EDIT_FRIEND:
            // TODO - Implement Edit Friend Reducer
            return state;


        default:
            return state;
    }
}