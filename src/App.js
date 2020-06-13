import React, {useState} from 'react';
import './App.css';

function App() {
  let [color, setColor] = useState('White')
  let [count, setCount] = useState('0')
  return (
    <div>
    <div className={`box white ${color === 'Blue' ? 'blue' : color === 'Green' ? 'green' : color === 'Purple' ? 'purple' : color === 'Red' ? 'red' : 'white'}`}>
      <h1>Background is : {color}</h1>
      <button onClick={()=> setColor('Blue')}>Blue</button>
      <button onClick={()=> setColor('Green')}>Green</button>
      <button onClick={()=> setColor('Purple')}>Purple</button>
      <button onClick={()=> setColor('Red')}>Red</button>
      <h3>Click on Button to change Background Color</h3>
      </div>
      <div className='grey box'>
      <br /><br /><br />
      <h2>Value of Counter is : {count}</h2>
      <button onClick={()=> setCount(++count)}>Add</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
    </div>
  );
}

export default App;
