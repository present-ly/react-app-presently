// REDUX
import { combineReducers } from 'redux';
// APP REDUCERS
// Auth
import RegistrationReducer from "./Registration";
import AuthenticationReducer from './Authentication';
import AuthorizationReducer from './Authorization';
// User Profile Settings
import UserPreferenceReducer from './UserPreference';
import UserProfileReducer from './UserProfile';
import InterestReducer from './InterestReducer';
// Notifications
import NotificationReducer from './Notification';
import ReminderReducer from './Reminder';
// Gamification
import PointReducer from './Point';
import RewardReducer from './Reward';
// Social Network
import InvitationReducer from './Invitation';
import FriendReducer from './Friend';
import FriendRequestReducer from './FriendRequest';
// Ecommerce
import CartReducer from './Cart';
import OrderReducer from './Order';
import PaymentReducer from './Payment';
import ReceiptReducer from './Receipt';
// Error Management
import ErrorReducer from './Error';
// UI Management


export default function(state, action) {
    return {
        // Auth
        registration: RegistrationReducer(state.registration, action),
        authentication: AuthenticationReducer(state.authentication, action),
        authorization: AuthorizationReducer(state.authorization, action),

        // UserProfile Settings
        userPreferences: UserPreferenceReducer(state.userPreferences, action),
        userProfile: UserProfileReducer(state.userProfile, action),
        interests: InterestReducer(state.interests, action),

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
        payments: PaymentReducer(state.ecommerce.payments, action),
        receipts: ReceiptReducer(state.ecommerce.receipts, action),

        // Error Management
        errors: ErrorReducer(state.errors, action),

        // UI Management
        // loaders: LoaderReducer(state.loaders, action),
        // components: ComponentReducer(state.components, action)
    }
}