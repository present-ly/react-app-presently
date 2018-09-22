import { ACTIONS } from './constants';

class Interest {

    static fetchInterests() {
        return {
            action: ACTIONS.FETCH_INTERESTS
        }
    }

    static addInterest(userId, interestId) {
        return {
            action: ACTIONS.ADD_INTEREST,
            userId,
            interestId
        };
    }

    static removeInterest(userId, interestId) {
        return {
            action: ACTIONS.REMOVE_INTEREST,
            userId,
            interestId
        };
    }

    static addUserInterest(userId, interestId) {
        return {
            action: ACTIONS.ADD_USER_INTEREST,
            userId,
            interestId
        };
    }

    static fetchUserInterests(userId) {
        return {
            action: ACTIONS.FETCH_USER_INTERESTS,
            userId
        }
    }

    static removeUserInterest(userId, interestId) {
        return {
            action: ACTIONS.REMOVE_USER_INTEREST,
            userId,
            interestId
        };
    }

    static addProductInterest(productId, interestId) {
        return {
            action: ACTIONS.ADD_PRODUCT_INTEREST,
            productId,
            interestId
        };
    }

    static fetchProductInterests(productId) {
        return {
            action: ACTIONS.FETCH_PRODUCT_INTERESTS,
            productId
        }
    }

    static removeProductInterest(productId, interestId) {
        return {
            action: ACTIONS.REMOVE_PRODUCT_INTEREST,
            productId,
            interestId
        };
    }

}

export default Interest;