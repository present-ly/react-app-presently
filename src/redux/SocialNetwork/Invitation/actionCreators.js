import { ACTIONS } from './constants';

class Invitations {

    static inviteEmail(email) {
        return {
            action: ACTIONS.INVITE_EMAIL,
            email
        }
    }

    static inviteOAuth(provider) {
        return {
            action: ACTIONS.INVITE_OAUTH,
            provider
        };
    }

}

export default Invitations;