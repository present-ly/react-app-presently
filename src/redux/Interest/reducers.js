// DEPENDENCIES
import AUTH_ACTIONS from './constants';
// CONSTANTS
const CLASSNAME = 'InterestReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        case AUTH_ACTIONS.ADD_INTEREST:
            // TODO - Implement Add Interest Reducer
            return state;

        case AUTH_ACTIONS.FETCH_INTERESTS:
            // TODO - Implement Fetch Interests Reducer
            return state;

        case AUTH_ACTIONS.REMOVE_INTEREST:
            // TODO - Implement Remove Interest Reducer
            return state;

        case AUTH_ACTIONS.ADD_USER_INTEREST:
            // TODO - Implement Add User Interest Reducer
            return state;

        case AUTH_ACTIONS.FETCH_USER_INTERESTS:
            // TODO - Implement Fetch User Interests Reducer

        case AUTH_ACTIONS.REMOVE_USER_INTEREST:
            // TODO - Implement Remove User Interest Reducer
            return state;

        case AUTH_ACTIONS.ADD_PRODUCT_INTEREST:
            // TODO - Implement Add Interest Reducer
            return state;

        case AUTH_ACTIONS.FETCH_PRODUCT_INTERESTS:
            // TODO - Implement Fetch Interests Reducer
            return state;

        case AUTH_ACTIONS.REMOVE_PRODUCT_INTEREST:
            // TODO - Implement Remove Interest Reducer
            return state;


        default:
            return state;
    }
}