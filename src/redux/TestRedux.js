import store from './ReduxStoreInitializer';

console.log('STORE', store.getState());

class TestRedux {
    static log() {
        const state = store.getState();
        console.log(`

PRESENTLY STATE
===================================
Friend Count: ${state.socialNetwork.friends.length}
Pending Friend Requests: ${state.socialNetwork.friendRequests.length}
Reminder Count: ${state.notification.reminders.length}
Order Count: ${state.ecommerce.orders.length}
Cart: ${state.ecommerce.cart.length}

ACTIONS
-----------------------------------
Coming Soon...
`);
        // To Interate though actions
        // ${Object.keys(ACTIONS).join('\\n         ')}
    }
}

export default TestRedux;