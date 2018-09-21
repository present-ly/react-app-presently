// REDUX
import { combineReducers } from 'redux';
// APP REDUCERS
import AuthenticationReducer from './Authentication';
import AuthorizationReducer from './Authorization';
import NotificationReducer from './Notification';
import InvitationReducer from './Invitation';
import CartReducer from './Cart';
import FriendReducer from './Friend';
import FriendRequestReducer from './FreindRequest';
import ReminderReducer from './Reminder';
import RewardReducer from './Reward';
import OrderReducer from './Order';

import UserReducer from './UserReducer';
import UserPreferenceReducer from './UserPreference';
import ErrorReducer from './ErrorReducer';
import RegistrationReducer from "./Registration";

export default function(state, action) {
    return {
        // Auth
        registration: RegistrationReducer(state.registration, action),
        authentication: AuthenticationReducer(state.authentication, action),
        authorization: AuthorizationReducer(state.authorization, action),

        // User Settings
        userPreferences: UserPreferenceReducer(state.userPreferences, action),

        // Gamification
        points: PointReducer(state.gamification.points, action),
        rewards: RewardReducer(state.gamification.rewards, action),

        // Notifications
        notifications: NotificationReducer(state.authorization, action),
        reminders: ReminderReducer(state.reminders, action),

        // Social Network
        invitations: InvitationReducer(state.invitations, action),
        friendRequests: FriendRequestReducer(state.friendRequests, action),
        friends: FriendReducer(state.friends, action),

        // Ecommerce
        cart: CartReducer(state.ecommerce.cart, action),
        orders: OrderReducer(state.ecommerce.orders, action),
        purchases: PurchaseReducer(state.ecommerce.purchases, action),
        repeipts: ReceiptReducer(state.ecommerce.reciepts, acction),

        // Error Management
        errors: ErrorReducer(state.errors, action),

        // UI Management
        loaders: LoaderReducer(state.loaders, action),
        components: ComponentReducer(state.components, action)
    }
}