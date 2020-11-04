import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { getLists } from '../api/lists';

const Home = () => {
  useEffect(async () => {
    const lists = await getLists();
    console.log('useEffect', lists);
  }, []);

  return (
    <div>
      Home
      <Link to="/philipp">Philipp&apos;s Wishlist</Link>
      <Link to="/leon">Leon&apos;s Wishlist</Link>
      <Link to="/add">Add</Link>
    </div>
  );
};

export default Home;
