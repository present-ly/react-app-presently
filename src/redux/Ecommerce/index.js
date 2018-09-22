import { combineReducers } from 'redux';
import {CartReducer} from "./Cart";
import {ReceiptReducer} from "./Receipt";
import {PaymentReducer} from "./Payment";
import {OrderReducer} from "./Order";

export default combineReducers({
    cart: CartReducer,
    orders: OrderReducer,
    payments: PaymentReducer,
    receipts: ReceiptReducer,
});