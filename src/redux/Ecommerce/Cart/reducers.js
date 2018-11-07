// DEPENDENCIES
import AUTH_ACTIONS from './constants';
// CONSTANTS
const CLASSNAME = 'CartReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        case AUTH_ACTIONS.ADD_ITEM_TO_CART:
            // TODO - Implement Add Item to Cart Reducer
            return state;

        case AUTH_ACTIONS.EDIT_ITEM_IN_CART:
            // TODO - Implement Edit Item in Cart Reducer
            return state;

        case AUTH_ACTIONS.REMOVE_ITEM_FROM_CART:
            // TODO - Implement Remove Item from Cart Reducer
            return state;

        case AUTH_ACTIONS.SAVE_CART:
            // TODO - Implement Save Cart Reducer
            return state;

        case AUTH_ACTIONS.CLEAR_CART:
            // TODO - Implement Clear Cart Reducer
            return state;

        case AUTH_ACTIONS.CHECKOUT:
            // TODO - Implement Checkout Reducer
            return state;


        default:
            return state;
    }
}