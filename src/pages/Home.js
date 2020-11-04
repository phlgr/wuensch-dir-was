import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { getLists } from '../api/lists';

const Home = () => {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  return (
    <div>
      Home
      {lists?.map((list) => (
        <Link key={list.id} to={`/${list.id}`}>
          {list.title}
        </Link>
      ))}
      <Link to="/add">Add</Link>
    </div>
  );
};

export default Home;
