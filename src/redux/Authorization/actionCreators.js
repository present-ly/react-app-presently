import { ACTIONS } from '../constants';

class Auth {

    static customAuthorization(authResult) {
        return {
            action: ACTIONS.AUTHORIZE_CUSTOM,
            authResult
        }
    }

    static oAuthAuthorization(authResult) {
        return {
            action: ACTIONS.AUTHORIZE_OAUTH,
            authResult
        }
    }
    
}

export default Auth;