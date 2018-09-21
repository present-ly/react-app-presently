import { ACTIONS } from './constants';
import state from './initialState';

class TestRedux {
    static initialState() {
        console.log(`

PRESENTLY STATE
===================================
Friend Count: ${state.friends.length}
Pending Friend Requests: ${state.friendRequests.length}
Reminder Count: ${state.reminders.length}
Order Count: ${state.ecommerce.orders.length}
Cart: ${state.ecommerce.cart.length}

ACTIONS
-----------------------------------
${Object.keys(ACTIONS).join('\n         ')}
            
        `);
    }
}

export default TestRedux;