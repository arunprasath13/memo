import React, { useState, useEffect, useCallback } from 'react';


const MemoizedComponent = React.memo(({ data }) => {
  console.log("Child component rendered")
  return <div>
    {data.map((d)=>{
      return (
        <p>{d.title}</p>
      )
    })}
  </div>;
});

const App = () => {
  const [data, setData] = useState(null);

  const [count,setCount] = useState(0)
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []); 
console.log("app component rendered")

  useEffect(() => {
    fetchData();
  }, [fetchData]); 

  return (
    <div>
      <h1>Component with Memo and Callback</h1>
      {data && <MemoizedComponent data={data} />}
      <button onClick={() => setCount(prev => prev + 1)}>Click</button>
    </div>
  );
};

export default App;

