// DEPENDENCIES
import ACTIONS from './constants'
// CONSTANTS
const CLASSNAME = 'RewardReducer';
const TESTING = true;
const LOG_ENTRY = true;

export default function (state = {}, action) {
    if (TESTING && LOG_ENTRY) { console.log(`${CLASSNAME}.reduce(state, action)`, state, action); }
    switch(action) {
        case ACTIONS.CLAIM_REWARD:
            // TODO - Implement Reward Claim Reducer
            return state;


        default:
            return state;
    }
}