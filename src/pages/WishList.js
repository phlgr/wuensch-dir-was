import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getListById } from '../api/lists';

const WishList = () => {
  const { listId } = useParams();
  const [list, setList] = useState(null);

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back</Link> {list.title}
      <ul>
        {list.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
