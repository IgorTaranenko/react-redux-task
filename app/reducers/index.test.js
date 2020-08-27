import {getDataToState} from '../actions/actions.js';
import stockTicker from './index.js';
const chai = require('chai');
const expect = chai.expect;

const data = JSON.stringify({id: 124, name: 'BTC', price: 300});
const action = getDataToState(data);

it('price should be changed', () => {
    let newState = stockTicker({}, action);
    expect(newState.quote).to.equal(300);
});
it('state has prev value', () => {
    let newState = stockTicker({id: 3, quote: 234}, action);
    expect(newState.prev).to.equal(234);
});
