import React from 'react';

import './Card.scss';

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { cardHeader, cardBody, input } = props;
  return (
    <div className="card-wrap">
      {cardHeader && <div className="header">{cardHeader}</div>}

      {cardBody && <div>{cardBody}</div>}

      {input && <div className="inputwrap">{input}</div>}
    </div>
  );
};

export default Card;
