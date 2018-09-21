import { ACTIONS } from '../constants';

class Receipt {

    static fetchReceipts(userId) {
        return {
            action: ACTIONS.FETCH_RECEIPTS,
            userId
        };
    }

}

export default Receipt;