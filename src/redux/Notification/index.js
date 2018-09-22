import { combineReducers } from 'redux';
import { MessageReducer } from './Message';
import { ReminderReducer } from './Reminder';
import { ErrorReducer } from './Error';

export default combineReducers({
    messages: MessageReducer,
    reminders: ReminderReducer,
    errors: ErrorReducer,
});