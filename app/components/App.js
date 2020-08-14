import '../styles/application.scss';
import {connectToServer} from '../services/tickerService.js';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Quote from './Quote.js';
// The below line is here as an example of getting prices

class App extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        connectToServer('BTC', this.propsDispatch);
    }
    propsDispatch = (data) => {
        return this.props.dispatch({type: 'GET_DATA_TO_STATE', payload: data});
    }
    render() {
        const quotes = this.props;
        if (!quotes.length) {
            return <p>Нет данных!</p>;
        }
        return quotes.map(quote => <Quote quotes={quote}/>);
    }
}
const mapStateToProps = (state) => {
    return {
        quotes: state
    };
};

export default connect(mapStateToProps)(App);
