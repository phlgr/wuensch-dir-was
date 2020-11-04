import React from 'react';
import { Link, useParams } from 'react-router-dom';

const WishList = () => {
  const { name } = useParams();

  return (
    <div>
      <Link to="/">Back</Link> {name} WishList
    </div>
  );
};

export default WishList;
