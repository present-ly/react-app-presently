import { combineReducers } from 'redux';
import { FriendReducer } from './Friend';
import { FriendRequestReducer } from './FriendRequest';
import { InvitationReducer } from "./Invitation";

export default combineReducers({
    invitations: InvitationReducer,
    friends: FriendReducer,
    friendRequests: FriendRequestReducer
});