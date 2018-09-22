import { ACTIONS } from './constants';

class Registration {

    static customSignUp(formData) {
        return {
            action: ACTIONS.SIGN_UP_CUSTOM,
            data: formData
        };
    }

    static oAuthSignUp(provider) {
        return {
            action: ACTIONS.SIGN_UP_OAUTH,
            provider
        };
    }

}

export default Registration;