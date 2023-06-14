import { useState } from 'react';

const SortArray = () => {
  const [array, setArray] = useState([2, 5, 1, 8, 6, 40, 9, 2, 19, 2]);

  const sortArray = (data) => {
    const sortedArray = [...array].sort((a,b)=>a-b)
    setArray(sortedArray);
  }

  return (
    <div>
      <p>{array}</p>
      <button onClick={sortArray}>Sort</button>
    </div>
  );
}

export default SortArray;
