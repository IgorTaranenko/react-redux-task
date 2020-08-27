import '../styles/application.scss';
import {connectToServer} from '../services/tickerService.js';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Quote from './Quote.js';
import {getDataToState} from '../actions/actions.js';
// The below line is here as an example of getting prices

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.change = null;
    }
    componentDidMount = () => {
        connectToServer('AAPL', this.props.getQuotes);
    }
    render() {
        const {quotes} = this.props;
        // Удалить
        console.log(quotes);
        // qwe
        if (!quotes) {
            return <p>Нет данных!</p>;
        }
        if (quotes) {
            return <Quote quotes={quotes} />;
        }
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
