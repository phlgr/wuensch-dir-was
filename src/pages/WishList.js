import React from 'react';
import { Link, useParams } from 'react-router-dom';

const WishList = () => {
  const { listId } = useParams();

  return (
    <div>
      <Link to="/">Back</Link> {listId} WishList
    </div>
  );
};

export default WishList;
