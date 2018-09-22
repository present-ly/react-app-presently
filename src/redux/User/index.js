import { combineReducers } from 'redux';
import { UserPreferenceReducer } from './UserPreference';
import { UserProfileReducer } from './UserProfile';
import { InterestReducer } from './Interest';

export default combineReducers({
    preferences: UserPreferenceReducer,
    profile: UserProfileReducer,
    interests: InterestReducer
});