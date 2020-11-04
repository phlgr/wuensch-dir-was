import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FloatingActionButton from '../components/FloatingActionButton';
import addPath from '../assets/add.svg';

const Header = styled.header`
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
`;

const Home = () => {
  return (
    <div>
      <Header>
        <h1>Wünsch dir was</h1>
      </Header>
      <main>
        <List>
          <Link to="/philipp">
            <li>Philipp&apos;s Wishlist</li>
          </Link>
          <Link to="/leon">
            <li>Leon&apos;s Wishlist</li>
          </Link>
        </List>
        <Link to="/add">
          <FloatingActionButton>
            <img src={addPath} alt="Link to add page" />
          </FloatingActionButton>
        </Link>
      </main>
    </div>
  );
};

export default Home;
