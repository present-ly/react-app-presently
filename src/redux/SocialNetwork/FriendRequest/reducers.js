// DEPENDENCIES
import ACTIONS from './constants'
// CONSTANTS
const CLASSNAME = 'FriendRequestReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {

        case ACTIONS.REQUEST_FRIEND:
            // TODO - Implement Request Friend Reducer
            return state;

        case ACTIONS.FETCH_FRIEND_REQUESTS:
            // TODO - Implement Fetch Friend Requests Reducer
            return state;

        case ACTIONS.ACCEPT_FRIEND:
            // TODO - Implement Accept Friend Reducer
            return state;

        case ACTIONS.REJECT_FRIEND:
            // TODO - Implement Reject Friend Reducer
            return state;


        default:
            return state;
    }
}