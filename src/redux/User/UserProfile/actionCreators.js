import { ACTIONS } from './constants';

class Auth {

    static invite(email) {
        return {
            action: ACTIONS.INVITE,
            email
        };
    }

    static requestFriend(userId) {
        return {
            action: ACTIONS.REQUEST_FRIEND,
            userId
        };
    }

    static fetchFriendRequests(userId) {
        return {
            action: ACTIONS.FETCH_FRIEND_REQUESTS,
            userId
        };
    }

    static acceptFriend(friendRequestId) {
        return {
            action: ACTIONS.ACCEPT_FRIEND,
            friendRequestId
        };
    }

    static rejectFriend(friendRequestId) {
        return {
            action: ACTIONS.REJECT_FRIEND,
            friendRequestId
        };
    }

    static removeFriend(friendRequestId) {
        return {
            action: ACTIONS.REMOVE_FRIEND,
            friendRequestId
        };
    }

    static editFriend(friendRequestId) {
        return {
            action: ACTIONS.EDIT_FRIEND,
            friendRequestId
        };
    }

    static fetchFriends(userId) {
        return {
            action: ACTIONS.FETCH_FRIENDS,
            userId
        };
    }
}

export default Auth;