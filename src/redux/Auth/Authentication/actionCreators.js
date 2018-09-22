import { ACTIONS } from './constants';

class Authentication {

    static customLogin(username, password) {
        return {
            action: ACTIONS.LOGIN_CUSTOM,
            credentials: {
                username,
                password
            }
        }
    }

    static oAuthLogin(provider) {
        return {
            action: ACTIONS.LOGIN_OAUTH,
            provider
        };
    }

    static logout() {
        return {
            action: ACTIONS.LOGOUT
        }
    }

}

export default Authentication;