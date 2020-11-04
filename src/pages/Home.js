import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
      <Link to="/wishlist">Philipp&apos;s Wishlist</Link>
      <Link to="/add">Add</Link>
    </div>
  );
};

export default Home;
