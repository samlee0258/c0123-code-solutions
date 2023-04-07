/* eslint-disable no-unused-vars -- REMOVE ME */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState(undefined);
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`

  useEffect(() => {
    async function loadItems() {
      try {
        const items = await readItems();
        setItems(items);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false)
      }
    }
    if (isLoading === undefined) {
      setIsLoading(true);
      loadItems();
    }
  }, [isLoading]);

  if (isLoading || isLoading === undefined) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.id}: {item.name}</li>)}
    </ul>
  );
}
