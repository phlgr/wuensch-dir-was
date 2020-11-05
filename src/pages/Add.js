import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { postList } from '../api/lists';

const ErrorMessage = styled.p`
  color: red;
`;

const Add = () => {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title === 'philipp') {
      return;
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const newList = await postList({
        title,
        items: [],
      });
      history.push(`/${newList.id}`);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Link to="/">Back</Link> Add
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Who do you like to buy gifts for?"
            required
          />
        </label>
        <input type="submit" value="Submit" disabled={loading} />
      </form>
      {loading && <div>Loading...</div>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default Add;
