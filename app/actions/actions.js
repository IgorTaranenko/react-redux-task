import {GET_DATA_TO_STATE} from './types.js';

export function getDataToState(data) {
    return {
        type: GET_DATA_TO_STATE,
        payload: data
    };
}
