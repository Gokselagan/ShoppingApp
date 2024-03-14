import { Approuter } from './Approuter';
import { Navbar } from './Components/Navbar';
import './App.css';
import { useState } from 'react';


export const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar count={count} />
      <Approuter count={count} setCount={setCount} />
    </div>
  );
}


