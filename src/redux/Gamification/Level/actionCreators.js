import { ACTIONS } from './constants';

class Level {

    static fetchLevel(userId) {
        return {
            action: ACTIONS.FETCH_LEVEL,
            userId
        };
    }
}

export default Level;