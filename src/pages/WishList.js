import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getListById, deleteListById } from '../api/lists';
import DangerButton from '../components/DangerButton';

const WishList = () => {
  const { listId } = useParams();
  const history = useHistory();
  const [list, setList] = useState(null);

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  if (!list) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    await deleteListById(listId);
    history.push('/');
  };

  return (
    <div>
      <Link to="/">Back</Link> {list.title}
      <ul>
        {list.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <DangerButton type="button" onClick={handleDelete}>
        Delete
      </DangerButton>
    </div>
  );
};

export default WishList;
