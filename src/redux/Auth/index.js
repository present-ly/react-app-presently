import { combineReducers } from 'redux';
import { AuthenticationReducer } from './Authentication';
import { AuthorizationReducer } from './Authorization';

export default combineReducers({
    authenticated: AuthenticationReducer,
    authorized: AuthorizationReducer,
});