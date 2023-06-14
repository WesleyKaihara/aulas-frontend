import { useState } from 'react';

const InputData = () => {

  const [completed, setCompleted] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div>
      <h4 style={{display: completed?"block":"none"}}>{value}</h4>
      <input 
        type="text" 
        onChange={(e) => setValue(e.target.value)} 
        disabled={completed}
      />
      <button onClick={() => setCompleted(true)} >
        Apresentar
      </button>
    </div>
  );
}

export default InputData;