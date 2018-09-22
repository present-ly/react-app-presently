import { combineReducers } from 'redux';
import { LevelReducer } from './Level';
import { BadgeReducer } from './Badge';
import { PointReducer } from './Point';
import { RewardReducer } from './Reward';

export default combineReducers({
    level: LevelReducer,
    badges: BadgeReducer,
    points: PointReducer,
    rewards: RewardReducer,
});