import React from 'react';

function Card(props) {
  return (
    <div className="row pb-3 mb-0 small lh-125 border-bottom border-gray">
        {props.children}
    </div>
  );
}

export default Card;
