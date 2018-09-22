import { ACTIONS } from './constants';

class Badge {

    static fetchBadges(userId) {
        return {
            action: ACTIONS.FETCH_BADGES,
            userId
        };
    }
}

export default Badge;