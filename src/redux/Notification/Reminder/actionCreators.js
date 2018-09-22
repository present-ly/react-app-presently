import { ACTIONS } from './constants';

class Auth {

    static fetchReminders(userId) {
        return {
            action: ACTIONS.FETCH_REMINDERS,
            userId
        }
    }
}

export default Auth;