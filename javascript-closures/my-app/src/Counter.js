import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    getData();
    setCounter((prev) => prev + 1);
  }, [getData]);

  const getData = (() => {
    const x = 1;
    // fetch data
    return { foo: counter + x };
  })

  return <div>Fetching {counter} times</div>;
}
