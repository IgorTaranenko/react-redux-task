import {GET_DATA_TO_STATE} from '../actions/types.js';

const stockTicker = (state = {}, action) => {
    switch (action.type) {
        case GET_DATA_TO_STATE:
            const newAction = JSON.parse(action.payload);
            const date = new Date();
            const id = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            return {...state, id: id, quote: newAction.price};
        default:
            return state;
    }
};

export default stockTicker;
