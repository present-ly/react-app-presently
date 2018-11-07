// DEPENDENCIES
import AUTH_ACTIONS from './constants';
// CONSTANTS
const CLASSNAME = 'PaymentReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        case AUTH_ACTIONS.ADD_PAYMENT_METHOD:
            // TODO - Implement Add Payment Reducer
            return state;

        case AUTH_ACTIONS.EDIT_PAYMENT_METHOD:
            // TODO - Implement Edit Payment Reducer
            return state;

        case AUTH_ACTIONS.REMOVE_PAYMENT_METHOD:
            // TODO - Implement Remove Payment Reducer
            return state;


        default:
            return state;
    }
}