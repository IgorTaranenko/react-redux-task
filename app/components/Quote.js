import React from 'react';
import PropTypes from 'prop-types';

function Quote(quotes) {
    let upDownStyle = '';
    let valueStyle = 'quote-value';
    if (quotes.quotes.quote > quotes.quotes.prev) {
        upDownStyle = 'quote-up';
        valueStyle = 'quote-value quote-value-up';
    } else {
        upDownStyle = 'quote-down';
        valueStyle = 'quote-value quote-value-down';
    }
    return(
       <div className="container">
       	<span className="quote-time">{quotes.quotes.id}: </span>
       	<span className={valueStyle}>{quotes.quotes.quote}</span>
       	<span className={upDownStyle}></span>
       </div>
    );
}
Quote.PropTypes = {
    quotes: PropTypes.object.isRequired,
};

export default Quote;
