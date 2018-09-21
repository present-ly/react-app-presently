import { ACTIONS } from '../constants';

class Point {

    static fetchPoints(userId) {
        return {
            action: ACTIONS.FETCH_POINTS,
            userId
        };
    }
}

export default Point;