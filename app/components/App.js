import '../styles/application.scss';
import {connectToServer} from '../services/tickerService.js';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Quote from './Quote.js';
import {getDataToState} from '../actions/actions.js';
// The below line is here as an example of getting prices

class App extends PureComponent {
    constructor() {
        super(undefined);
    }
    componentDidMount = () => {
        connectToServer('BTC', this.props.getQuotes);
    }
    render() {
        const {quotes} = this.props;
        if (!quotes) {
            return <p>Нет данных!</p>;
        }
        return <Quote quotes={quotes}/>;
    }
}
const mapStateToProps = (state) => {
    return {
        quotes: state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getQuotes: data => dispatch(getDataToState(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
