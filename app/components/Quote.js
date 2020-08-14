import React from 'react';

function Quote(quotes) {
    return(
       <div>
       	<span>{quotes.id}: </span>
       	<span>{quotes.quote}</span>
       </div>
    );
}

export default Quote;
