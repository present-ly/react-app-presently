import { ACTIONS } from './constants';

class Auth {

    static addError(error) {
        return {
            action: ACTIONS.INVITE,
            error
        }
    }

    static removeError(errorId) {
        return {
            action: ACTIONS.REMOVE_ERROR,
            errorId
        }
    }

    static clearErrors() {
        return {
            action: ACTIONS.CLEAR_ERRORS
        }
    }
}

export default Auth;