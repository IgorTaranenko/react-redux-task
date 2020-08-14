import React from 'react';
import PropTypes from 'prop-types';

function Quote(quotes) {
    console.log(quotes.quotes);
    return(
       <div>
       	<span>{quotes.quotes.id}: </span>
       	<span>{quotes.quotes.quote}</span>
       </div>
    );
}
Quote.PropTypes = {
    quotes: PropTypes.object.isRequired
};

export default Quote;
