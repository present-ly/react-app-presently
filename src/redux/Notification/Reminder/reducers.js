// DEPENDENCIES
import AUTH_ACTIONS from './constants';
// CONSTANTS
const CLASSNAME = 'ReminderReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        case AUTH_ACTIONS.FETCH_REMINDERS:
            // TODO - Implement Fetch Reminder Reducer
            return state;


        default:
            return state;
    }
}