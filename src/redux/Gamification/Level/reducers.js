// DEPENDENCIES
import ACTIONS from './constants'
// CONSTANTS
const CLASSNAME = 'LevelReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {

        case ACTIONS.FETCH_POINTS:
            // TODO - Implement Fetch Level Reducer
            return state;


        default:
            return state;
    }
}