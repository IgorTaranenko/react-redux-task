import {GET_DATA_TO_STATE} from '../actions/types.js';

const initialState = {
};

const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_TO_STATE:
            let prev = null;
            if (state.quote) {
                prev = state.quote;
            }
            const newAction = JSON.parse(action.payload);
            const date = new Date();
            const id = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            return {...state, id: id, quote: newAction.price, prev};
        default:
            return state;
    }
};

export default stockTicker;
