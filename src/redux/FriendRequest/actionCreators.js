import { ACTIONS } from '../constants';

class FriendRequestActionCreator {

    static requestFriend(userId) {
        return {
            action: ACTIONS.REQUEST_FRIEND,
            userId
        }
    }

    static fetchFriendRequests(userId) {
        return {
            action: ACTIONS.FETCH_FRIEND_REQUESTS,
            userId
        }
    }

    static acceptFriend(friendRequestId) {
        return {
            action: ACTIONS.ACCEPT_FRIEND,
            friendRequestId
        }
    }

    static rejectFriend(friendRequestId) {
        return {
            action: ACTIONS.REJECT_FRIEND,
            friendRequestId
        }
    }
}

export default FriendRequestActionCreator;