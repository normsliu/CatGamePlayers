import React, { ReactElement } from 'react';

import Badge from '../badge/Badge';

const Card = ({ player }): ReactElement => {
  console.log(player);
  return (
    <div className="card-container">
      <p>player</p>
      <Badge />
    </div>
  );
};

export default Card;
