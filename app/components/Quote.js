import React from 'react';
import PropTypes from 'prop-types';

function Quote(quotes) {
    return(
       <div className="container">
       	<span className="quote-time">{quotes.quotes.id}: </span>
       	<span className="quote-value">{quotes.quotes.quote}</span>
       </div>
    );
}
Quote.PropTypes = {
    quotes: PropTypes.object.isRequired,
};

export default Quote;
