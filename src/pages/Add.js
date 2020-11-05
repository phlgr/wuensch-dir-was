import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postList } from '../api/lists';

const Add = () => {
  const [title, setTitle] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title === 'philipp') {
      return;
    }

    const newList = await postList({
      title,
      items: [],
    });
    history.push(`/${newList.id}`);
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Add;
