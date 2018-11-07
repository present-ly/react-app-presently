// DEPENDENCIES
import ACTIONS from './constants';
// CONSTANTS
const CLASSNAME = 'ErrorReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        case ACTIONS.ADD_ERROR:
            // TODO - Implement Add Error Reducer
            return state;

        case ACTIONS.REMOVE_ERROR:
            // TODO - Implement Remove Error Reducer
            return state;

        case ACTIONS.CLEAR_ERRORS:
            // TODO - Implement Clear Errors Reducer
            return state;


        default:
            return state;
    }
}