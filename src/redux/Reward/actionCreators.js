import { ACTIONS } from '../constants';

class Auth {

    static claimReward(reward) {
        return {
            action: ACTIONS.CLAIM_REWARD,
            reward
        };
    }
}

export default Auth;