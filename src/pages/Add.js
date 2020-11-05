import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postList } from '../api/lists';

const Add = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title === 'philipp') {
      return;
    }

    setLoading(true);
    const newList = await postList({
      title,
      items: [],
    });
    setLoading(false);

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
        <input type="submit" value="Submit" disabled={loading} />
      </form>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Add;
