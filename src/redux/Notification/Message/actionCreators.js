import { ACTIONS } from './constants';

class Auth {

    static fetchMessages(userId) {
        return {
            action: ACTIONS.FETCH_MESSAGES,
            userId
        }
    }
}

export default Auth;