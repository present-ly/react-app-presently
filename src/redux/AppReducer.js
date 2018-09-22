// REDUX
import { combineReducers } from 'redux';
// APP REDUCERS
// Auth
// Combined Reducers
import AuthReducer from './Auth';
import EcommerceReducer from './Ecommerce';
import SocialNetworkReducer from './SocialNetwork';
import GamificationReducer from './Gamification';
import NotificationReducer from './Notification';
import UserReducer from './User';
// Registration
import {RegistrationReducer} from "./Registration";

export default combineReducers({
    registration: RegistrationReducer,
    auth: AuthReducer,
    ecommerce: EcommerceReducer,
    gamification: GamificationReducer,
    notification: NotificationReducer,
    socialNetwork: SocialNetworkReducer,
    user: UserReducer
})