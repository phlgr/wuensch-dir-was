import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deleteListById, getLists } from '../api/lists';
import FloatingActionButton from '../components/FloatingActionButton';
import addPath from '../assets/add.svg';
import DangerButton from '../components/DangerButton';

const Header = styled.header`
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
`;

const Home = () => {
  const [lists, setLists] = useState(null);
  const [refreshAt, setRefreshAt] = useState(Date.now);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, [refreshAt]);

  const handleDelete = async (listId) => {
    await deleteListById(listId);
    setRefreshAt(Date.now());
  };

  return (
    <div>
      <Header>
        <h1>Wünsch dir was</h1>
      </Header>
      <main>
        <List>
          {lists?.map((list) => (
            <li key={list.id}>
              <Link to={`/${list.id}`}>{list.title}</Link>
              <DangerButton type="button" onClick={() => handleDelete(list.id)}>
                <span role="img" aria-label="Delete Emoji">
                  ❌
                </span>
              </DangerButton>
            </li>
          ))}
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
